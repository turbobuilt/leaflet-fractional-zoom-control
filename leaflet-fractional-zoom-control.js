L.Control.FractionalZoom = L.Control.Zoom.extend({
	options:{
		zoomIncrement: .2
	},
	_zoomIn: function (e) {
		if (!this._disabled) {
			this._map.zoomIn((e.shiftKey ? 3 : 1)* this.options.zoomIncrement);
		}
	},

	_zoomOut: function (e) {
		if (!this._disabled) {
			this._map.zoomOut((e.shiftKey ? 3 : 1) * this.options.zoomIncrement);
		}
	},

})

L.Map.addInitHook(function () {
    if (this.options.zoomDisplayControl) {
        this.zoomDisplayControl = new L.Control.ZoomDisplay();
        this.addControl(this.zoomDisplayControl);
    }
});

L.control.fractionalZoom = function (options) {
    return new L.Control.FractionalZoom(options);
};