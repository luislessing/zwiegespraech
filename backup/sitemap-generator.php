<?php
/**
 * Automatischer Sitemap Generator für All-inkl
 * Cronjob: monatlich am 1. um 3:00 Uhr
 */

// Konfiguration - angepasst für zwiegespräch-theater.de
$domain = 'https://zwiegespräch-theater.de';
// KORRIGIERT: Entweder absoluter Pfad ODER __DIR__ - nicht beides!
$sitemap_file = '/www/htdocs/w01ff19c/xn--zwiegesprch-theater-owb.de/sitemap.xml';
// Alternative (einfacher): 
// $sitemap_file = __DIR__ . '/sitemap.xml';

// Statische Seiten definieren - erweitert basierend auf Ihren Dokumenten
$static_pages = [
    '/' => ['priority' => '1.0', 'changefreq' => 'monthly'],
    '/kontakt/' => ['priority' => '0.8', 'changefreq' => 'monthly'],
    '/impressum/' => ['priority' => '0.3', 'changefreq' => 'yearly'],
    '/archiv/' => ['priority' => '0.6', 'changefreq' => 'monthly'],
    '/ueber-uns/' => ['priority' => '0.7', 'changefreq' => 'monthly'],
    '/produktion/' => ['priority' => '0.8', 'changefreq' => 'monthly'],
    '/kalender/' => ['priority' => '0.8', 'changefreq' => 'weekly'],
];

// Dynamische Seiten sammeln - für Theater-Website angepasst
$dynamic_pages = [];

// Falls Sie später Projekte/Produktionen hinzufügen:
$projects_dir = __DIR__ . '/projekte/';
if (is_dir($projects_dir)) {
    $project_files = glob($projects_dir . '*.html');
    foreach ($project_files as $file) {
        $filename = basename($file, '.html');
        $url = '/projekte/' . $filename . '/';
        $dynamic_pages[$url] = [
            'priority' => '0.7',
            'changefreq' => 'monthly',
            'lastmod' => date('Y-m-d', filemtime($file))
        ];
    }
}

// XML generieren
function generateSitemap($domain, $static_pages, $dynamic_pages, $sitemap_file) {
    try {
        $xml = new DOMDocument('1.0', 'UTF-8');
        $xml->formatOutput = true;
        
        // Root-Element
        $urlset = $xml->createElement('urlset');
        $urlset->setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
        $xml->appendChild($urlset);
        
        // Alle Seiten zusammenführen
        $all_pages = array_merge($static_pages, $dynamic_pages);
        
        foreach ($all_pages as $url => $data) {
            $url_element = $xml->createElement('url');
            
            // URL (Sicherheitscheck für XML-Encoding)
            $clean_url = htmlspecialchars($domain . $url, ENT_XML1, 'UTF-8');
            $loc = $xml->createElement('loc', $clean_url);
            $url_element->appendChild($loc);
            
            // Last Modified
            $lastmod_date = isset($data['lastmod']) ? $data['lastmod'] : date('Y-m-d');
            $lastmod = $xml->createElement('lastmod', $lastmod_date);
            $url_element->appendChild($lastmod);
            
            // Change Frequency
            $changefreq = $xml->createElement('changefreq', $data['changefreq']);
            $url_element->appendChild($changefreq);
            
            // Priority
            $priority = $xml->createElement('priority', $data['priority']);
            $url_element->appendChild($priority);
            
            $urlset->appendChild($url_element);
        }
        
        // Verzeichnis erstellen falls nicht vorhanden
        $dir = dirname($sitemap_file);
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
        
        // Datei speichern
        if ($xml->save($sitemap_file)) {
            echo "Sitemap erfolgreich generiert: " . date('Y-m-d H:i:s') . "\n";
            echo "Datei gespeichert: " . $sitemap_file . "\n";
            echo "URLs: " . count($all_pages) . "\n";
            
            // Optional: Suchmaschinen benachrichtigen
            pingSearchEngines($domain);
            
            return true;
        } else {
            echo "Fehler beim Speichern der Sitemap in: " . $sitemap_file . "\n";
            return false;
        }
        
    } catch (Exception $e) {
        echo "FEHLER: " . $e->getMessage() . "\n";
        return false;
    }
}

// Suchmaschinen über Update benachrichtigen
function pingSearchEngines($domain) {
    $sitemap_url = urlencode($domain . '/sitemap.xml');
    
    $ping_urls = [
        'https://www.google.com/ping?sitemap=' . $sitemap_url,
        'https://www.bing.com/ping?sitemap=' . $sitemap_url,
    ];
    
    foreach ($ping_urls as $ping_url) {
        $response = @file_get_contents($ping_url);
        if ($response !== false) {
            echo "Search engine ping sent: " . $ping_url . "\n";
        } else {
            echo "Ping failed for: " . $ping_url . "\n";
        }
    }
}

// Debug-Informationen ausgeben
echo "=== Sitemap Generator Debug ===\n";
echo "Script läuft in: " . __DIR__ . "\n";
echo "Sitemap wird gespeichert: " . $sitemap_file . "\n";
echo "Verzeichnis existiert: " . (is_dir(dirname($sitemap_file)) ? 'JA' : 'NEIN') . "\n";
echo "Schreibberechtigung: " . (is_writable(dirname($sitemap_file)) ? 'JA' : 'NEIN') . "\n";
echo "=============================\n\n";

// Sitemap generieren
$success = generateSitemap($domain, $static_pages, $dynamic_pages, $sitemap_file);

// Log für Debugging
$log_entry = date('Y-m-d H:i:s') . " - Sitemap " . ($success ? 'erfolgreich' : 'fehlgeschlagen') . " generiert\n";
$log_file = __DIR__ . '/sitemap.log';
file_put_contents($log_file, $log_entry, FILE_APPEND);

echo "Log geschrieben in: " . $log_file . "\n";
?>