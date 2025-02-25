Scroller = Class.create({
    speed: 60,
    step: 1,
    link: "none",
    format: "p",

    timer: null,

    id: null,
    global: null,

    box: null,
    boxSize: 0,

    move: null,
    moveSize: 0,

    offset: 0,

    initialize: function(id) {
        // Common.log("initialize: " + id);

        if (!window.scrollerData || !window.scrollerData[id] || !window.scrollerData[id].data)
            return;

        this.id = id;
        this.global = window.scrollerData[id];

        if (this.global.config) {
            this.speed = this.global.config.speed || 60;
            this.step = this.global.config.step || 1;
            this.link = this.global.config.link || "none";
            this.format = this.global.config.format || "p";
        }

        // Common.log("speed " + this.speed + ", step " + this.step + ", format " + this.format);

        this.box = $("scroller_" + id);
        this.boxSize = this.box.getWidth();

        this.box.innerHTML = "<" + this.format + " id='scrollme_" + id + "' class='scrollme-box'>&nbsp;</" + this.format + ">";
        jQuery(this.box).after("<" + this.format + " style=\"margin-bottom:0\">&#160;</" + this.format + ">");
        
        this.move = $("scrollme_" + id);
        this.moveSize = this.build(this.move);

        this.offset = this.boxSize;
        this.timer = setInterval(this.run.bind(this), this.speed);

        this.box.onmouseover = function() {
            clearInterval(this.timer);
        }.bind(this);

        this.box.onmouseout = function() {
            clearInterval(this.timer);
            this.timer = setInterval(this.run.bind(this), this.speed);
        }.bind(this);
    },

    run: function() {
        // Common.log("run: " + this.offset);
        this.offset -= this.step;
        this.move.style.left = this.offset + "px";
        this.boxSize = this.box.getWidth();
        if (this.offset < (-1 * this.move.clientWidth) || this.offset > this.boxSize){
            this.offset = this.boxSize;
        }
    },

    clear: function() {
        if (this.timer)
            clearInterval(this.timer);
    },

    build: function(element) {
        //  debugger;
    	var re = new RegExp("<[^>]*>","ig");
        var html = "";
        var data = null;
        var text = null;

        html += "<span>+++</span>";

        for (var i = 0; i < this.global.data.length; i++) {
            html += "<span>";
            data = this.global.data[i];
            text = unescape(data.text).replace(re, "");
            // debugger;

            if (this.link == "none") {
                html += text;
            } else {
                var target = (this.link == "internal") ? "_self" : "_new";
                html += "<a href='" + data.url + "' target='" + target + "' onfocus='this.blur();'>" + text + "</a>";
            }

            html += "</span>";
            html += "<span>+++</span>";
        }

        element.innerHTML = html;
        element.style.left = this.boxSize + "px";

        return element.getWidth();
    }
});
