var matrix = ( function() {
		var instance;

		var UIBuilder = function(options) {
			options = options || {};
			var matrix = [1][1];

			this.container = options.container || $(document.createElement(div)).addClass("matrix-container");
			this.rowCount = options.rowCount;
			this.colCount = options.colCount;
			this.uiElem = options.uiElem;

			this.createEvent = options.event;

			this._matrix = matrix;
		};

		/**
		 * @method: _renderUI
		 * @desc: Ui renderer
		 **/
		UIBuilder.prototype._renderUI = function() {
			var self = this;
			var $matrixTable = $(self._createTable());

			self.container.append($matrixTable);
			self.container.find('p.text-success').show();
		};
		/**
		 * @method: _matrixInit
		 * @desc: Iniitialise matrix
		 **/
		UIBuilder.prototype._matrixInit = function() {
			var self = this;

			for (var i = 0; i < self.rowCount; i++) {
				for (var j = 0; j < self.colCount; j++) {
					self._matrix[i][j] = 1;
				}
			}
		};
		/**
		 * @method: _createTable
		 * @desc: Create a table for the matrix
		 **/
		UIBuilder.prototype._createTable = function() {
			var self = this;
			var table = $(self.uiElem.table);

			for (var i = 0; i < self.rowCount; i++) {
				var trRow = $(self.uiElem.row);
				for (var j = 0; j < self.colCount; j++) {
					var inputField = $(self.uiElem.input);
					var tdCell = $(self.uiElem.cell);

					inputField.attr('id', "ip-"+i+""+j);
					tdCell.append(inputField);
					trRow.append(tdCell);
				}
				table.append(trRow);
			}

			return table;
		};
		/**
		 * @method: _createTable
		 * @desc: Create a table for the matrix
		 **/
		UIBuilder.prototype._clearContainer = function() {
			var self = this;
			
			$(self.container).children().not('p:first').remove();
		};
		/**
		 * @method: init
		 * @desc: Entry point for the plugin
		 **/
		UIBuilder.prototype.init = function() {
			var self = this;
			
			self._clearContainer();
			self._renderUI();

			console.log(self.rowCount + " " + self.colCount);
		};
		// Create Singleton Instance
		var createInstance = function(options) {
			var uiBuilder = new UIBuilder(options);
			return uiBuilder;
		};

		// Destroy Instance
		var destroyInstance = function() {
			delete instance;
		};

		return {
			getInstance : function(options) {
				if (!instance) {
					instance = createInstance(options);
				}
				return instance;
			},
			destroyInstance : destroyInstance
		};
	}());
