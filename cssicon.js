module.exports = {
	type: "css",
	styles: new Map([
		[
			"search",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 12px; left: 5px; height: 6px; width: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 2px; margin-left: 3px; width: 12px; height: 12px; border: 1px solid currentcolor; border-radius: 100%; transform: rotate(-45deg); }"
			]
		],
		[
			"magnify",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 12px; left: 5px; height: 6px; width: 1px; background-color: currentcolor; }',
				'.extend i::after { content: ""; position: absolute; width: 6px; height: 1px; background-color: currentcolor; transform: rotate(90deg); }',
				'.extend i::before { content: ""; position: absolute; width: 6px; height: 1px; background-color: currentcolor; }',
				".extend i { position: absolute; left: 4px; top: 4px; transform: rotate(45deg); }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 2px; margin-left: 3px; width: 12px; height: 12px; border: 1px solid currentcolor; border-radius: 100%; transform: rotate(-45deg); }"
			]
		],
		[
			"minify",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 12px; left: 5px; height: 6px; width: 1px; background-color: currentcolor; }',
				'.extend i::before { content: ""; position: absolute; width: 6px; height: 1px; background-color: currentcolor; }',
				".extend i { position: absolute; left: 4px; top: 4px; transform: rotate(45deg); }",
				".extend { color: black; position: absolute; margin-top: 2px; margin-left: 3px; width: 12px; height: 12px; border: 1px solid currentcolor; border-radius: 100%; transform: rotate(-45deg); }"
			]
		],
		[
			"close",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 10px; width: 21px; height: 1px; background-color: currentcolor; transform: rotate(45deg); }',
				'.extend::before { content: ""; position: absolute; top: 10px; width: 21px; height: 1px; background-color: currentcolor; transform: rotate(-45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 0px; margin-left: 0px; width: 21px; height: 21px; }"
			]
		],
		[
			"menu",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 0px; width: 17px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -5px; left: 0px; width: 17px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 10px; width: 17px; height: 1px; background-color: currentcolor; }"
			]
		],
		[
			"arrow-left",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: -5px; width: 10px; height: 10px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-135deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; width: 16px; height: 1px; background-color: currentcolor; }"
			]
		],
		[
			"arrow-right",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; right: 1px; top: -5px; width: 10px; height: 10px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 10px; width: 16px; height: 1px; background-color: currentcolor; }"
			]
		],
		[
			"arrow-up",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -5px; top: 1px; width: 10px; height: 10px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 10px; margin-top: 3px; width: 1px; height: 16px; background-color: currentcolor; }"
			]
		],
		[
			"arrow-down",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -5px; top: 3px; width: 10px; height: 10px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(135deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 10px; margin-top: 2px; width: 1px; height: 16px; background-color: currentcolor; }"
			]
		],
		[
			"plus",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; width: 15px; height: 1px; background-color: currentcolor; transform: rotate(90deg); }',
				'.extend::before { content: ""; position: absolute; width: 15px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; }"
			]
		],
		[
			"minus",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; width: 15px; height: 1px; background-color: currentcolor; }"
			]
		],
		[
			"check",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 4px; width: 14px; height: 8px; border-bottom: 1px solid currentcolor; border-left: 1px solid currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"remove",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; width: 15px; height: 1px; background-color: currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; width: 15px; height: 1px; background-color: currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; }"
			]
		],
		[
			"trash",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: -5px; width: 7px; height: 2px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-top: 1px solid currentcolor; border-radius: 4px 4px 0px 0px; }',
				'.extend::before { content: ""; position: absolute; left: -4px; top: -2px; width: 17px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 7px; width: 9px; height: 10px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-radius: 0px 0px 2px 2px; }"
			]
		],
		[
			"audio",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; bottom: -4px; width: 1px; height: 4px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: -6px; width: 5px; height: 10px; border: 1px solid currentcolor; border-radius: 4px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 8px; width: 9px; height: 7px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-radius: 0px 0px 50% 50%; }"
			]
		],
		[
			"pin",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 4px; height: 4px; border: 1px solid currentcolor; border-radius: 3px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 2px; width: 12px; height: 12px; border: 1px solid currentcolor; border-radius: 7px 7px 7px 0px; transform: rotate(-45deg); }"
			]
		],
		[
			"chat",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 8px; width: 4px; height: 4px; transform: rotate(45deg); background-color: white; border-bottom: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 4px; width: 15px; height: 10px; border: 1px solid currentcolor; border-radius: 2px; }"
			]
		],
		[
			"stop",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: -1px; width: 17px; height: 1px; background-color: currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 2px; left: 7px; width: 1px; height: 6px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 7px; width: 5px; height: 1px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; position: relative; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-h3m30",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; left: 7px; width: 1px; height: 6px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 7px; width: 5px; height: 1px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-h9m0",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 2px; left: 7px; width: 1px; height: 6px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 3px; width: 5px; height: 1px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-h9m30",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; left: 7px; width: 1px; height: 6px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 3px; width: 5px; height: 1px; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"profile",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: -10px; width: 8px; height: 8px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 11px; width: 14px; height: 6px; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-radius: 6px 6px 0px 0px; }"
			]
		],
		[
			"bell",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: -2px; left: -3px; width: 15px; height: 0px; border-top: 1px solid currentcolor; border-bottom: 1px solid white; }',
				'.extend::before { content: ""; position: absolute; bottom: -5px; left: 2px; width: 3px; height: 3px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 2px; width: 9px; height: 10px; border: 1px solid currentcolor; border-radius: 5px 5px 0px 0px; }"
			]
		],
		[
			"heart",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 8px; width: 5px; height: 8px; border-radius: 0px 5px 5px 0px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -5px; left: -1px; width: 8px; height: 5px; border-radius: 5px 5px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 6px; margin-left: 5px; width: 9px; height: 9px; border-left: 1px solid currentcolor; border-bottom: 1px solid currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"print",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: -1px; width: 13px; height: 3px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; background-color: white; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: -3px; height: 13px; width: 9px; border: 1px solid currentcolor; background-color: white; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 15px; height: 6px; border: 1px solid currentcolor; border-radius: 1px 1px 0px 0px; }"
			]
		],
		[
			"edit",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -12px; top: -1px; width: 0px; height: 0px; border-width: 2px 5px; border-style: solid; border-color: transparent currentcolor transparent transparent; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 7px; width: 14px; height: 2px; border-radius: 1px; border: 1px solid currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"link",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: -3px; right: -7px; width: 8px; height: 5px; border-radius: 2px; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -3px; left: -7px; width: 8px; height: 5px; border-radius: 2px; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 8px; margin-top: 10px; width: 7px; height: 1px; background-color: currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"map",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; top: -3px; width: 4px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; transform: skewY(-40deg); }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 1px; width: 4px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; transform: skewY(-40deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 8px; margin-top: 4px; width: 4px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; transform: skewY(20deg); }"
			]
		],
		[
			"mail",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 7px; top: -4px; width: 1px; height: 10px; background-color: currentcolor; transform-origin: center bottom 0px; transform: rotate(54deg); }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: -4px; width: 1px; height: 10px; background-color: currentcolor; transform-origin: center bottom 0px; transform: rotate(-54deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 4px; width: 15px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"bookmark",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 10px; left: 1px; width: 7px; height: 7px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 3px; width: 10px; height: 15px; border-radius: 1px 1px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }"
			]
		],
		[
			"camera",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 2px; top: -2px; width: 4px; height: 1px; border-radius: 1px 1px 0px 0px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 5px; top: 2px; width: 4px; height: 4px; border-radius: 3px; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 16px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"focus",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: -2px; width: 9px; height: 19px; color: white; background-color: currentcolor; transform-origin: center center 0px; transform: rotate(90deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: -2px; width: 9px; height: 19px; color: white; background-color: currentcolor; transform-origin: center center 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"card",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 1px; bottom: 2px; width: 4px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 1px; left: -1px; width: 17px; height: 2px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 4px; width: 15px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"lock",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: -8px; width: 5px; height: 6px; border-radius: 4px 4px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; width: 13px; height: 6px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"unlock",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: -4px; width: 1px; height: 3px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: -8px; width: 5px; height: 3px; border-radius: 4px 4px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; width: 13px; height: 6px; border: 1px solid currentcolor; border-radius: 1px; }"
			]
		],
		[
			"code",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 6px; width: 8px; height: 8px; border-bottom: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; width: 8px; height: 8px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; transform: rotate(-45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 6px; }"
			]
		],
		[
			"flag",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -3px; top: -2px; width: 1px; height: 15px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 4px; width: 9px; height: 6px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"tag",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 1px; width: 9px; height: 10px; border-radius: 1px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; transform: rotate(-45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 3px; width: 7px; height: 7px; border-radius: 1px 1px 1px 0px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; }"
			]
		],
		[
			"signal",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: -9px; top: -9px; width: 22px; height: 22px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }',
				'.extend::before { content: ""; position: absolute; left: -5px; top: -5px; width: 14px; height: 14px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 7px; margin-top: 13px; width: 6px; height: 6px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }"
			]
		],
		[
			"export",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: -5px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; top: -5px; left: 2px; width: 1px; height: 8px; border-left: 3px solid white; border-right: 3px solid white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 7px; width: 11px; height: 9px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"upload",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: -8px; left: 4px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; top: -8px; left: 6px; width: 1px; height: 9px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 12px; width: 13px; height: 4px; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-left: 1px solid currentcolor; border-image: initial; border-top: none; border-radius: 1px; }"
			]
		],
		[
			"import",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: 1px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(135deg); }',
				'.extend::before { content: ""; position: absolute; top: -4px; left: 2px; width: 1px; height: 10px; background-color: currentcolor; border-left: 3px solid white; border-right: 3px solid white; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 5px; width: 11px; height: 11px; border: 1px solid currentcolor; border-radius: 1px; }"
			]
		],
		[
			"download",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; top: -4px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(135deg); }',
				'.extend::before { content: ""; position: absolute; left: 6px; top: -9px; width: 1px; height: 10px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 12px; width: 13px; height: 4px; border-radius: 1px; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-left: 1px solid currentcolor; border-image: initial; border-top: none; }"
			]
		],
		[
			"upload2",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 4px; left: 3px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; top: 4px; left: 2px; width: 1px; height: 10px; background-color: currentcolor; border-left: 3px solid white; border-right: 3px solid white; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 3px; width: 11px; height: 11px; border: 1px solid currentcolor; border-radius: 1px; }"
			]
		],
		[
			"shutdown",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: -2px; width: 1px; height: 8px; border-left: 3px solid white; border-right: 3px solid white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 3px; margin-left: 3px; width: 13px; height: 13px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"paperclip",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: 1px; width: 2px; height: 10px; border-radius: 4px 4px 0px 0px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-top: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 11px; left: -1px; width: 4px; height: 6px; border-radius: 0px 0px 3px 3px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 9px; margin-top: 2px; width: 6px; height: 12px; border-radius: 4px 4px 0px 0px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-top: 1px solid currentcolor; transform: rotate(45deg); }"
			]
		],
		[
			"retweet",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: -3px; bottom: -2px; width: 0px; height: 0px; border-width: 3px; border-style: solid; border-color: currentcolor white white; }',
				'.extend::before { content: ""; position: absolute; left: -3px; top: -2px; width: 0px; height: 0px; border-width: 3px; border-style: solid; border-color: white white currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 5px; width: 13px; height: 9px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"key",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 13px; top: 3px; width: 1px; height: 3px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: 3px; width: 11px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 6px; width: 7px; height: 7px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"key2",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 14px; top: 0px; width: 1px; height: 3px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: 3px; width: 12px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 10px; margin-top: 2px; width: 7px; height: 7px; border-radius: 50%; border: 1px solid currentcolor; transform: rotate(135deg); }"
			]
		],
		[
			"refresh",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 10px; width: 3px; height: 3px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; transform: rotate(-22.5deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }"
			]
		],
		[
			"pilcrow",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 8px; top: -1px; height: 16px; width: 2px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 2px; width: 8px; height: 8px; border-radius: 5px 0px 0px 5px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"justified",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 2px; left: 0px; width: 17px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"paragraph-direction",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 3px; left: 6px; width: 0px; height: 0px; border-width: 2px; border-style: solid; border-color: white currentcolor white white; }',
				'.extend::before { content: ""; position: absolute; top: 2px; left: 0px; width: 16px; height: 2px; border-radius: 0px 2px 2px 0px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 8px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"left-align",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 2px; left: 0px; width: 11px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"center-align",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 2px; left: 3px; width: 11px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"right-align",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 2px; right: 0px; width: 11px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 5px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"indent",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 1px; width: 0px; height: 0px; border-width: 3px; border-style: solid; border-color: transparent transparent transparent currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 2px; right: 0px; width: 11px; height: 2px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 8px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"outdent",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 1px; left: -3px; width: 0px; height: 0px; border-width: 3px; border-style: solid; border-color: transparent currentcolor transparent transparent; }',
				'.extend::before { content: ""; position: absolute; top: 2px; right: 0px; width: 11px; height: 2px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 17px; height: 8px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"mouse",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: -1px; left: 5px; width: 1px; height: 7px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 6px; left: -1px; width: 13px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 1px; width: 11px; height: 17px; border: 1px solid currentcolor; border-radius: 6px; }"
			]
		],
		[
			"keyboard",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: 1px; left: 4px; width: 9px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: 3px; width: 1px; height: 1px; border: 1px solid transparent; box-shadow: currentcolor -2px 0px 0px -1px, currentcolor 2px 0px 0px -1px, currentcolor 0px -2px 0px -1px, currentcolor 0px 2px 0px -1px, currentcolor -6px 0px 0px -1px, currentcolor 6px 0px 0px -1px, currentcolor -4px -2px 0px -1px, currentcolor -4px 2px 0px -1px, currentcolor 4px -2px 0px -1px, currentcolor 4px 2px 0px -1px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 4px; width: 17px; height: 11px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"left-double-quote",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 3px; left: 9px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 3px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend i::after { content: ""; position: absolute; top: 0px; left: 9px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent transparent currentcolor; transform: rotate(45deg); }',
				'.extend i::before { content: ""; position: absolute; top: 0px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent transparent currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 17px; height: 11px; }"
			]
		],
		[
			"right-double-quote",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 9px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 0px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend i::after { content: ""; position: absolute; top: -3px; left: 3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent currentcolor transparent transparent; transform: rotate(45deg); }',
				'.extend i::before { content: ""; position: absolute; left: -6px; top: -3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent currentcolor transparent transparent; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 17px; height: 11px; }"
			]
		],
		[
			"left-single-quote",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 0px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent transparent currentcolor; transform: rotate(45deg); }',
				'.extend::before { content: ""; position: absolute; top: 3px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 5px; width: 9px; height: 11px; }"
			]
		],
		[
			"right-single-quote",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: -6px; top: -3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent currentcolor transparent transparent; transform: rotate(45deg); }',
				'.extend::before { content: ""; position: absolute; top: 0px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 5px; width: 9px; height: 11px; }"
			]
		],
		[
			"mustache",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 13px; top: 4px; width: 7px; height: 4px; border-width: 0px 0px 6px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; border-radius: 0px 0px 100%; transform-origin: left 7px 0px; transform: rotate(40deg); }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 4px; width: 7px; height: 4px; border-radius: 0px 0px 0px 100%; border-width: 0px 0px 6px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; transform-origin: right 7px 0px; transform: rotate(-40deg); }',
				'.extend i::after { content: ""; position: absolute; left: 13px; top: 6px; width: 6px; height: 3px; color: white; border-width: 0px 0px 4px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; border-radius: 0px 0px 100%; transform-origin: left 5px 0px; transform: rotate(40deg); }',
				'.extend i::before { content: ""; position: absolute; left: 2px; top: 6px; width: 6px; height: 3px; color: white; border-width: 0px 0px 4px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; border-radius: 0px 0px 0px 100%; transform-origin: right 5px 0px; transform: rotate(-40deg); }',
				".extend i { width: 4px; height: 4px; border-radius: 50%; color: white; box-shadow: currentcolor 6px 9px 0px 0px, currentcolor 11px 9px 0px 0px; position: absolute; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; width: 6px; height: 6px; border-radius: 50%; box-shadow: currentcolor 5px 8px 0px 0px, currentcolor 10px 8px 0px 0px; }"
			]
		],
		[
			"eye",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: 2px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 3px; width: 12px; height: 12px; border-radius: 70% 15%; border: 1px solid currentcolor; transform: rotate(45deg); }"
			]
		],
		[
			"battery-0",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 2px; height: 3px; border-radius: 0px 2px 2px 0px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"battery-1",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: 1px; width: 4px; height: 5px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 2px; height: 3px; border-radius: 0px 2px 2px 0px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"battery",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: 1px; width: 8px; height: 5px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 2px; height: 3px; border-radius: 0px 2px 2px 0px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"battery-3",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: 1px; width: 11px; height: 5px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 2px; height: 3px; border-radius: 0px 2px 2px 0px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"suitcase",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; width: 7px; height: 10px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: -3px; width: 5px; height: 2px; border-radius: 3px 3px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 15px; height: 10px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"browser",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; width: 15px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 1px; width: 11px; height: 11px; border-radius: 85% 15%; transform: rotate(-45deg); border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"tv",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; bottom: -4px; width: 7px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; bottom: -4px; width: 1px; height: 3px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 3px; width: 15px; height: 10px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"laptop",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -4px; bottom: -5px; width: 18px; height: 1px; border-radius: 0px 0px 2px 2px; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 3px; width: 12px; height: 8px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"mobile",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: 1px; left: 5px; height: 2px; width: 2px; border-radius: 50%; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 5px; top: 1px; width: 2px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 0px; width: 12px; height: 19px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"tablet",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: 0px; left: 6px; width: 3px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 1px; left: 0px; height: 13px; width: 15px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 1px; width: 15px; height: 17px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"picture",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 2px; top: 9px; width: 12px; height: 8px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: 2px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"watch",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 2px; top: 5px; width: 3px; height: 4px; border-left: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: -4px; top: 3px; width: 11px; height: 11px; border-radius: 50%; border: 1px solid currentcolor; background-color: white; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 7px; margin-top: 0px; width: 5px; height: 19px; border-radius: 1px; border: 1px solid currentcolor; }"
			]
		],
		[
			"target",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 7px; top: -1px; width: 1px; height: 11px; border-top: 3px solid currentcolor; border-bottom: 3px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: -1px; top: 7px; width: 11px; height: 1px; border-left: 3px solid currentcolor; border-right: 3px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"navigate",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 9px; width: 0px; height: 0px; color: white; border-width: 5px 7px; border-style: solid; border-color: transparent transparent currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 0px; top: -17px; width: 0px; height: 0px; border-width: 18px 7px; border-style: solid; border-color: transparent transparent currentcolor; }',
				'.extend i::after { content: ""; position: absolute; left: 0px; top: 6px; width: 0px; height: 0px; border-width: 4px 5px; border-style: solid; border-color: transparent transparent currentcolor; }',
				'.extend i::before { content: ""; position: absolute; left: 0px; top: -14px; width: 0px; height: 0px; color: white; border-width: 14px 5px; border-style: solid; border-color: transparent transparent currentcolor; }',
				".extend i { position: absolute; width: 10px; height: 14px; left: 2px; top: 3px; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: -1px; width: 14px; height: 18px; transform: rotate(45deg); }"
			]
		],
		[
			"float",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; left: -1px; width: 17px; height: 1px; transform: rotate(45deg); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: -1px; width: 17px; height: 1px; transform: rotate(-45deg); background-color: currentcolor; }',
				".extend i { position: absolute; left: 3px; top: 3px; width: 7px; height: 7px; background-color: white; border-radius: 50%; border: 1px solid currentcolor; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"more",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: -1px; left: 6px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -1px; left: -8px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 9px; margin-top: 9px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"more-vertical",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: -1px; top: 6px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: -1px; top: -8px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 9px; margin-top: 9px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"smile",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"wink",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"wink-tougue",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend i::before { content: ""; position: absolute; top: -1px; right: 0px; width: 2px; height: 2px; border-radius: 2px; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 4px; top: 10px; width: 8px; height: 1px; background-color: currentcolor; transform: rotate(-3deg); }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"tougue",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend i::before { content: ""; position: absolute; top: -1px; right: 0px; width: 2px; height: 2px; border-radius: 2px; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 4px; top: 10px; width: 8px; height: 1px; background-color: currentcolor; transform: rotate(-3deg); }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"relieved",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"laugh",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border: 1px solid currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"wink-laugh",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border: 1px solid currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"grin",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend i::before { content: ""; position: absolute; left: 3px; top: 0px; width: 2px; height: 4px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border: 1px solid currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"grin-wink",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend i::before { content: ""; position: absolute; left: 3px; top: 0px; width: 2px; height: 4px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border: 1px solid currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"smiley",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border-width: 1px; border-style: solid; border-color: transparent currentcolor currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"wink-smiley",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border-width: 1px; border-style: solid; border-color: transparent currentcolor currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"relieved-smiley",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; border-radius: 0px 0px 6px 6px; border-width: 1px; border-style: solid; border-color: transparent currentcolor currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"sad",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 3px; top: 10px; width: 8px; height: 8px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"pensive",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 5px; top: 11px; width: 6px; height: 1px; background-color: currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"unamused",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 3px; top: 10px; width: 8px; height: 8px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; }"
			]
		],
		[
			"cloud",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 4px; width: 7px; height: 6px; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"snow",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 5px; width: 9px; height: 2px; color: rgb(255, 255, 255); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				".extend i { position: absolute; top: 4px; left: 7px; width: 2px; height: 2px; border-radius: 1px; background-color: currentcolor; box-shadow: currentcolor 3px -2px 0px 0px, currentcolor 3px 1px 0px 0px, currentcolor 0px 3px 0px 0px; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"rain",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 5px; width: 9px; height: 2px; color: rgb(255, 255, 255); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				".extend i { position: absolute; top: 6px; left: 8px; width: 1px; height: 4px; background-color: currentcolor; box-shadow: currentcolor 3px -3px 0px 0px, currentcolor 3px -8px 0px 0px, currentcolor 0px -5px 0px 0px; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"cloud-raindrop",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 5px; width: 9px; height: 2px; color: rgb(255, 255, 255); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				".extend i { position: absolute; top: 6px; left: 6px; width: 4px; height: 4px; transform: rotate(45deg); border-radius: 0px 2px 2px; background-color: currentcolor; box-shadow: currentcolor -1px -6px 0px 0px; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"cloud-lightning",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 5px; width: 9px; height: 2px; color: rgb(255, 255, 255); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				'.extend i::after { content: ""; position: absolute; top: -1px; left: 4px; width: 0px; height: 0px; border-left: 4px solid currentcolor; border-bottom: 7px solid transparent; }',
				'.extend i::before { content: ""; position: absolute; top: -6px; left: 2px; width: 0px; height: 0px; border-right: 4px solid currentcolor; border-top: 7px solid transparent; }',
				".extend i { position: absolute; left: 5px; top: 4px; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"cloud-download",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 5px; width: 9px; height: 2px; color: rgb(255, 255, 255); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				'.extend i::after { content: ""; position: absolute; left: 3px; top: 6px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(135deg); }',
				'.extend i::before { content: ""; position: absolute; top: 4px; left: 1px; width: 1px; height: 7px; background-color: currentcolor; border-left: 4px solid rgb(255, 255, 255); border-right: 4px solid rgb(255, 255, 255); }',
				".extend i { position: absolute; left: 5px; top: -4px; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"cloud-upload",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: 5px; width: 9px; height: 2px; color: rgb(255, 255, 255); background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				'.extend i::after { content: ""; position: absolute; left: 3px; top: 4px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend i::before { content: ""; position: absolute; top: 4px; left: 1px; width: 1px; height: 7px; background-color: currentcolor; border-left: 4px solid rgb(255, 255, 255); border-right: 4px solid rgb(255, 255, 255); }',
				".extend i { position: absolute; left: 5px; top: -4px; z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"moon",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 6px; top: 1px; width: 10px; height: 10px; border-radius: 50%; transform: rotate(45deg); border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 2px; width: 14px; height: 14px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor transparent currentcolor currentcolor; }",
				'.extend::before { content: ""; position: absolute; left: 6px; top: 1px; width: 10px; height: 10px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(45deg); }'
			]
		],
		[
			"sun",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 6px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor 0px 8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor -6px 6px 0px -3px, currentcolor 6px -6px 0px -3px, currentcolor 6px 6px 0px -3px; }"
			]
		],
		[
			"sun-brightness",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 6px; width: 3px; height: 6px; border-radius: 50%; border-color: currentcolor; border-style: solid; border-width: 1px 4px 1px 1px; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor 0px 8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor -6px 6px 0px -3px, currentcolor 6px -6px 0px -3px, currentcolor 6px 6px 0px -3px; }"
			]
		],
		[
			"sun-raindrop",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; top: 4px; width: 4px; height: 4px; border-radius: 50% 0px 50% 50%; border: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; border-radius: 50% 0px 50% 50%; transform: rotate(-45deg); color: rgb(255, 255, 255); background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 6px; width: 6px; height: 6px; border: 1px solid currentcolor; border-radius: 50%; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor 0px 8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor -6px 6px 0px -3px, currentcolor 6px -6px 0px -3px, currentcolor 6px 6px 0px -3px; }"
			]
		],
		[
			"sun-horizon",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 6px; width: 18px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 9px; width: 6px; height: 6px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-image: initial; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor 6px -6px 0px -3px; }"
			]
		],
		[
			"sunrise",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 6px; width: 18px; height: 1px; background-color: currentcolor; }',
				'.extend i::before { content: ""; position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; border-bottom: 2px solid currentcolor; border-left: 2px solid transparent; border-right: 2px solid transparent; }',
				".extend i { position: absolute; left: 2px; top: 2px; width: 2px; height: 3px; background-color: currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 9px; width: 6px; height: 6px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-image: initial; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor 6px -6px 0px -3px; }"
			]
		],
		[
			"sunset",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 6px; width: 18px; height: 1px; background-color: currentcolor; }',
				'.extend i::before { content: ""; position: absolute; left: -1px; top: 2px; width: 0px; height: 0px; border-top: 2px solid currentcolor; border-left: 2px solid transparent; border-right: 2px solid transparent; }',
				".extend i { position: absolute; left: 2px; top: 1px; width: 2px; height: 3px; background-color: currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 9px; width: 6px; height: 6px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-image: initial; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor 6px -6px 0px -3px; }"
			]
		],
		[
			"raindrop",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 5px; width: 10px; height: 10px; border: 1px solid currentcolor; border-radius: 6px 6px 6px 0px; transform: rotate(135deg); }"
			]
		],
		[
			"no-raindrop",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 5px; left: -5px; width: 19px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 5px; width: 10px; height: 10px; border: 1px solid currentcolor; border-radius: 6px 6px 6px 0px; transform: rotate(135deg); }"
			]
		],
		[
			"search-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: 1px; width: 10px; height: 10px; background-color: currentcolor; border-radius: 50%; }',
				'.extend::before { content: ""; position: absolute; top: 12px; left: 5px; width: 1px; height: 6px; background-color: currentcolor; }',
				".extend { color: black; position: absolute; margin-top: 2px; margin-left: 3px; width: 12px; height: 12px; border: 1px solid currentcolor; border-radius: 100%; transform: rotate(-45deg); }"
			]
		],
		[
			"magnify-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 12px; left: 5px; height: 6px; width: 1px; background-color: currentcolor; }',
				'.extend i::after { content: ""; position: absolute; width: 6px; height: 1px; color: white; background-color: currentcolor; transform: rotate(90deg); }',
				'.extend i::before { content: ""; position: absolute; width: 6px; height: 1px; color: white; background-color: currentcolor; }',
				".extend i { position: absolute; left: 4px; top: 4px; transform: rotate(45deg); }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 2px; margin-left: 3px; width: 12px; height: 12px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 100%; transform: rotate(-45deg); }"
			]
		],
		[
			"minify-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 12px; left: 5px; height: 6px; width: 1px; background-color: currentcolor; }',
				'.extend i::before { content: ""; position: absolute; width: 6px; height: 1px; color: white; background-color: currentcolor; }',
				".extend i { position: absolute; left: 4px; top: 4px; transform: rotate(45deg); }",
				".extend { color: black; position: absolute; margin-top: 2px; margin-left: 3px; width: 12px; height: 12px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 100%; transform: rotate(-45deg); }"
			]
		],
		[
			"trash-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: -5px; width: 7px; height: 2px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-top: 1px solid currentcolor; background-color: currentcolor; border-radius: 4px 4px 0px 0px; }',
				'.extend::before { content: ""; position: absolute; left: -4px; top: -2px; width: 17px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 7px; width: 9px; height: 10px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-radius: 0px 0px 2px 2px; background-color: currentcolor; }"
			]
		],
		[
			"audio-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; bottom: -4px; width: 1px; height: 4px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: -6px; width: 5px; height: 10px; border: 1px solid currentcolor; border-radius: 4px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 8px; width: 9px; height: 7px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; border-radius: 0px 0px 50% 50%; }"
			]
		],
		[
			"pin-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 4px; height: 4px; color: white; border: 1px solid currentcolor; border-radius: 3px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 2px; width: 12px; height: 12px; border: 1px solid currentcolor; border-radius: 7px 7px 7px 0px; background-color: currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"chat-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 8px; width: 4px; height: 4px; background-color: currentcolor; border-bottom: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 4px; width: 15px; height: 10px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 2px; }"
			]
		],
		[
			"stop-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: -1px; width: 17px; height: 1px; color: white; background-color: currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 2px; left: 7px; width: 1px; height: 6px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 7px; width: 5px; height: 1px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; background-color: currentcolor; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-h3m30-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; left: 7px; width: 1px; height: 6px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 7px; width: 5px; height: 1px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; background-color: currentcolor; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-h9m0-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 2px; left: 7px; width: 1px; height: 6px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 3px; width: 5px; height: 1px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; background-color: currentcolor; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"clock-h9m30-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; left: 7px; width: 1px; height: 6px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				'.extend::before { content: ""; position: absolute; top: 7px; left: 3px; width: 5px; height: 1px; color: white; background-color: currentcolor; transform-origin: 0% 0% 0px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; background-color: currentcolor; border: 1px solid currentcolor; border-radius: 8px; }"
			]
		],
		[
			"profile-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: -10px; width: 8px; height: 8px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 11px; width: 14px; height: 6px; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; background-color: currentcolor; border-radius: 6px 6px 0px 0px; }"
			]
		],
		[
			"bell-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: -2px; left: -3px; width: 15px; height: 0px; border-top: 1px solid currentcolor; border-bottom: 1px solid white; }',
				'.extend::before { content: ""; position: absolute; bottom: -5px; left: 2px; width: 3px; height: 3px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 2px; width: 9px; height: 10px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 5px 5px 0px 0px; }"
			]
		],
		[
			"heart-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 8px; width: 5px; height: 8px; border-radius: 0px 5px 5px 0px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -5px; left: -1px; width: 8px; height: 5px; border-radius: 5px 5px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-top: 6px; margin-left: 5px; width: 9px; height: 9px; border-left: 1px solid currentcolor; border-bottom: 1px solid currentcolor; background-color: currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"print-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 1px; top: -1px; width: 13px; height: 3px; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: -3px; height: 13px; width: 9px; border: 1px solid currentcolor; background-color: white; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 15px; height: 6px; border-radius: 1px 1px 0px 0px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"edit-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -12px; top: -1px; width: 0px; height: 0px; border-width: 2px 5px; border-style: solid; border-color: transparent currentcolor transparent transparent; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 7px; width: 14px; height: 2px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; transform: rotate(-45deg); }"
			]
		],
		[
			"mail-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 7px; top: -4px; width: 1px; height: 10px; color: white; background-color: currentcolor; transform-origin: center bottom 0px; transform: rotate(54deg); }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: -4px; width: 1px; height: 10px; color: white; background-color: currentcolor; transform-origin: center bottom 0px; transform: rotate(-54deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 4px; width: 15px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"bookmark-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; top: 10px; left: 1px; width: 7px; height: 7px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; background-color: white; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 3px; width: 10px; height: 15px; border-radius: 1px 1px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"camera-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 2px; top: -2px; width: 4px; height: 1px; border-radius: 1px 1px 0px 0px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 5px; top: 2px; width: 4px; height: 4px; border-radius: 3px; color: white; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 16px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"card-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 1px; bottom: 2px; width: 4px; height: 1px; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 1px; left: -1px; width: 17px; height: 2px; color: white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 4px; width: 15px; height: 10px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"lock-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: -8px; width: 5px; height: 6px; border-radius: 4px 4px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; width: 13px; height: 6px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"unlock-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: -4px; width: 1px; height: 3px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: -8px; width: 5px; height: 3px; border-radius: 4px 4px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 10px; width: 13px; height: 6px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"flag-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -3px; top: -2px; width: 1px; height: 15px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 4px; width: 9px; height: 6px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"tag-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 1px; width: 9px; height: 10px; border-radius: 1px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; border-bottom: 1px solid currentcolor; background-color: currentcolor; transform: rotate(-45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 3px; width: 7px; height: 7px; border-radius: 1px 1px 1px 0px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"key-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 13px; top: 3px; width: 1px; height: 3px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: 3px; width: 11px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 6px; width: 7px; height: 7px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"key2-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 14px; top: 0px; width: 1px; height: 3px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: 3px; width: 12px; height: 1px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 10px; margin-top: 2px; width: 7px; height: 7px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; transform: rotate(135deg); }"
			]
		],
		[
			"pilcrow-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 8px; top: -1px; height: 16px; width: 2px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 2px; width: 8px; height: 8px; border-radius: 5px 0px 0px 5px; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"mouse-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 5px; top: -1px; width: 1px; height: 7px; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 6px; left: -1px; width: 13px; height: 1px; color: white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 1px; width: 11px; height: 17px; border-radius: 6px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"keyboard-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: 1px; left: 4px; width: 9px; height: 1px; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; top: 3px; width: 1px; height: 1px; border: 1px solid transparent; color: white; box-shadow: currentcolor -2px 0px 0px -1px, currentcolor 2px 0px 0px -1px, currentcolor 0px -2px 0px -1px, currentcolor 0px 2px 0px -1px, currentcolor -6px 0px 0px -1px, currentcolor 6px 0px 0px -1px, currentcolor -4px -2px 0px -1px, currentcolor -4px 2px 0px -1px, currentcolor 4px -2px 0px -1px, currentcolor 4px 2px 0px -1px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 4px; width: 17px; height: 11px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"left-double-quote-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; width: 6px; height: 6px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 50%; top: 3px; left: 9px; }',
				'.extend::before { content: ""; position: absolute; width: 6px; height: 6px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 50%; top: 3px; }',
				'.extend i::after { content: ""; position: absolute; top: 0px; left: 9px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent transparent currentcolor; transform: rotate(45deg); }',
				'.extend i::before { content: ""; position: absolute; top: 0px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent transparent currentcolor; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 17px; height: 11px; }"
			]
		],
		[
			"right-double-quote-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 9px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 0px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend i::after { content: ""; position: absolute; top: -3px; left: 3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent currentcolor transparent transparent; transform: rotate(45deg); }',
				'.extend i::before { content: ""; position: absolute; left: -6px; top: -3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent currentcolor transparent transparent; transform: rotate(45deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 5px; width: 17px; height: 11px; }"
			]
		],
		[
			"left-single-quote-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 0px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent transparent currentcolor; transform: rotate(45deg); }',
				'.extend::before { content: ""; position: absolute; top: 3px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 5px; width: 9px; height: 11px; }"
			]
		],
		[
			"right-single-quote-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: -6px; top: -3px; width: 12px; height: 12px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent currentcolor transparent transparent; transform: rotate(45deg); }',
				'.extend::before { content: ""; position: absolute; top: 0px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 5px; width: 9px; height: 11px; }"
			]
		],
		[
			"mustache-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; width: 7px; height: 4px; left: 13px; top: 4px; border-radius: 0px 0px 100%; border-width: 0px 0px 6px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; transform-origin: left 7px 0px; transform: rotate(40deg); }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 4px; width: 7px; height: 4px; border-radius: 0px 0px 0px 100%; border-width: 0px 0px 6px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; transform-origin: right 7px 0px; transform: rotate(-40deg); }',
				".extend { color: rgb(0, 0, 0); position: absolute; width: 6px; height: 6px; border-radius: 50%; box-shadow: currentcolor 5px 8px 0px 0px, currentcolor 10px 8px 0px 0px; }"
			]
		],
		[
			"eye-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: 2px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 3px; width: 12px; height: 12px; border-radius: 70% 15%; border: 1px solid currentcolor; transform: rotate(45deg); }"
			]
		],
		[
			"eye-solid2",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 6px; height: 6px; border-radius: 50%; color: white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 3px; width: 12px; height: 12px; border-radius: 70% 15%; border: 1px solid currentcolor; background-color: currentcolor; transform: rotate(45deg); }"
			]
		],
		[
			"eye-solid3",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: 2px; width: 6px; height: 6px; border-radius: 50%; color: white; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 3px; margin-top: 3px; width: 12px; height: 12px; border-radius: 70% 15%; border: 1px solid currentcolor; background-color: currentcolor; transform: rotate(45deg); }"
			]
		],
		[
			"battery-solid-0",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 0px; height: 7px; width: 1px; color: white; border-radius: 1px 0px 0px 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 3px; height: 5px; border-radius: 0px 2px 2px 0px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"battery-solid-1",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 0px; height: 7px; width: 5px; color: white; border-radius: 1px 0px 0px 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 3px; height: 5px; border-radius: 0px 2px 2px 0px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"battery-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 0px; height: 7px; width: 9px; color: white; border-radius: 1px 0px 0px 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 3px; height: 5px; border-radius: 0px 2px 2px 0px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"battery-solid-3",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 0px; height: 7px; width: 13px; color: white; border-radius: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; right: -3px; top: 1px; width: 3px; height: 5px; border-radius: 0px 2px 2px 0px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 13px; height: 7px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"suitcase-1",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; width: 7px; height: 10px; color: white; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: -3px; width: 5px; height: 2px; border-radius: 3px 3px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 15px; height: 10px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"suitcase-2",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 3px; width: 7px; height: 10px; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: -3px; width: 5px; height: 2px; border-radius: 3px 3px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 15px; height: 10px; border-radius: 2px; border: 1px solid currentcolor; }"
			]
		],
		[
			"suitcase-3",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; width: 7px; height: 10px; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: -3px; width: 5px; height: 2px; border-radius: 3px 3px 0px 0px; border-top: 1px solid currentcolor; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 6px; width: 15px; height: 10px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"browser-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 7px; width: 15px; height: 1px; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 1px; top: 1px; width: 11px; height: 11px; border-radius: 85% 15%; transform: rotate(-45deg); color: white; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"tv-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; bottom: -4px; width: 7px; height: 1px; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 7px; bottom: -4px; width: 1px; height: 3px; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 3px; width: 15px; height: 10px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"laptop-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -4px; bottom: -5px; width: 18px; height: 1px; border-radius: 0px 0px 2px 2px; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 3px; width: 12px; height: 8px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"mobile-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: -3px; left: 5px; height: 2px; width: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 0px; width: 12px; height: 14px; border-radius: 2px; border-width: 3px 1px 4px; border-style: solid; border-color: currentcolor; }"
			]
		],
		[
			"tablet-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; bottom: -2px; left: 6px; width: 3px; height: 1px; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 1px; left: 0px; height: 13px; width: 15px; border: none; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 1px; width: 15px; height: 14px; border-radius: 2px; border-width: 2px 1px 3px; border-style: solid; border-color: currentcolor; }"
			]
		],
		[
			"picture-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 2px; top: 9px; width: 12px; height: 8px; color: white; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 2px; top: 2px; width: 2px; height: 2px; border-radius: 50%; color: white; border: 1px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 2px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"watch-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 2px; top: 5px; width: 3px; height: 4px; color: white; border-left: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: -5px; top: 2px; width: 13px; height: 13px; border-radius: 50%; border: 1px solid white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 7px; margin-top: 0px; width: 5px; height: 19px; border-radius: 1px; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"target-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 7px; top: -1px; width: 1px; height: 13px; color: white; border-top: 2px solid currentcolor; border-bottom: 2px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: -1px; top: 7px; width: 13px; height: 1px; color: white; border-left: 2px solid currentcolor; border-right: 2px solid currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"navigate-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: 9px; width: 0px; height: 0px; color: white; border-width: 5px 7px; border-style: solid; border-color: transparent transparent currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 0px; top: -17px; width: 0px; height: 0px; border-width: 18px 7px; border-style: solid; border-color: transparent transparent currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: -1px; width: 14px; height: 18px; transform: rotate(45deg); }"
			]
		],
		[
			"float-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 3px; left: -5px; width: 17px; height: 1px; transform: rotate(45deg); color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: 3px; left: -5px; width: 17px; height: 1px; transform: rotate(-45deg); color: white; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 7px; height: 7px; border-radius: 50%; border: 5px solid currentcolor; }"
			]
		],
		[
			"more-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: -1px; left: 6px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -1px; left: -8px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 9px; margin-top: 9px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"more-vertical-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: -1px; top: 6px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: -1px; top: -8px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 9px; margin-top: 9px; width: 2px; height: 2px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"smile-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				".extend i { position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; border-radius: 50%; color: white; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"tougue-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend i::before { content: ""; position: absolute; top: -1px; right: 0px; width: 2px; height: 2px; border-radius: 2px; color: white; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 4px; top: 10px; width: 8px; height: 1px; color: white; background-color: currentcolor; transform: rotate(-3deg); }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"relieved-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"laugh-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; color: white; border-radius: 0px 0px 6px 6px; border: 1px solid currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"grin-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend i::before { content: ""; position: absolute; left: 3px; top: 0px; width: 2px; height: 4px; color: white; border-left: 1px solid currentcolor; border-right: 1px solid currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; color: white; border-radius: 0px 0px 6px 6px; border: 1px solid currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"smiley-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; color: white; border-radius: 0px 0px 6px 6px; border-width: 1px; border-style: solid; border-color: transparent currentcolor currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"relieved-smiley-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 2px; top: 9px; width: 10px; height: 4px; color: white; border-radius: 0px 0px 6px 6px; border-width: 1px; border-style: solid; border-color: transparent currentcolor currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"sad-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				'.extend::before { content: ""; position: absolute; left: 4px; top: 4px; width: 2px; height: 2px; border-radius: 50%; color: white; background-color: currentcolor; }',
				".extend i { position: absolute; left: 3px; top: 10px; width: 8px; height: 8px; border-radius: 50%; color: white; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"pensive-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 5px; top: 11px; width: 6px; height: 1px; color: white; background-color: currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"unamused-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; right: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 2px; height: 2px; color: white; border-radius: 50%; border-width: 1px; border-style: solid; border-color: transparent transparent currentcolor currentcolor; transform: rotate(-45deg); }',
				".extend i { position: absolute; left: 3px; top: 10px; width: 8px; height: 8px; border-radius: 50%; color: white; border-width: 1px; border-style: solid; border-color: currentcolor transparent transparent; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 2px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; }"
			]
		],
		[
			"cloud-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 4px; width: 7px; height: 6px; background-color: currentcolor; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); background-color: currentcolor; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; background-color: currentcolor; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"cloud-download-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 4px; width: 7px; height: 6px; background-color: currentcolor; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); background-color: currentcolor; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				'.extend i::after { content: ""; position: absolute; left: 3px; top: 6px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(135deg); }',
				'.extend i::before { content: ""; position: absolute; top: 4px; left: 5px; width: 1px; height: 7px; background-color: currentcolor; }',
				".extend i { position: absolute; left: 5px; top: -5px; color: rgb(255, 255, 255); z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; background-color: currentcolor; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"cloud-upload-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 4px; width: 7px; height: 6px; background-color: currentcolor; border-bottom: 1px solid currentcolor; }',
				'.extend::before { content: ""; position: absolute; top: -7px; left: 4px; width: 12px; height: 12px; border-radius: 50%; transform: rotate(-45deg); background-color: currentcolor; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor currentcolor transparent; }',
				'.extend i::after { content: ""; position: absolute; left: 3px; top: 4px; width: 4px; height: 4px; border-top: 1px solid currentcolor; border-right: 1px solid currentcolor; transform: rotate(-45deg); }',
				'.extend i::before { content: ""; position: absolute; top: 4px; left: 5px; width: 1px; height: 7px; background-color: currentcolor; }',
				".extend i { position: absolute; left: 5px; top: -4px; color: rgb(255, 255, 255); z-index: 2; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 1px; margin-top: 9px; width: 5px; height: 6px; border-radius: 4px 0px 0px 4px; background-color: currentcolor; border-left: 1px solid currentcolor; border-top: 1px solid currentcolor; border-bottom: 1px solid currentcolor; }"
			]
		],
		[
			"moon-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: 8px; top: 3px; width: 8px; height: 10px; color: rgb(255, 255, 255); background-color: currentcolor; border-radius: 5px 0px 0px 5px; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 4px; margin-top: 2px; width: 16px; height: 16px; border-radius: 50%; background-color: currentcolor; }"
			]
		],
		[
			"sun-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 6px; width: 6px; height: 6px; border-radius: 50%; border: 1px solid currentcolor; background-color: currentcolor; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor 0px 8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor -6px 6px 0px -3px, currentcolor 6px -6px 0px -3px, currentcolor 6px 6px 0px -3px; }"
			]
		],
		[
			"sun-raindrop-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; left: 4px; top: 4px; width: 4px; height: 4px; border-radius: 50% 0px 50% 50%; border: 1px solid currentcolor; background-color: currentcolor; transform: rotate(-45deg); }',
				'.extend::before { content: ""; position: absolute; left: 3px; top: 3px; width: 8px; height: 8px; border-radius: 50% 0px 50% 50%; transform: rotate(-45deg); color: rgb(255, 255, 255); background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 6px; width: 6px; height: 6px; border: 1px solid currentcolor; background-color: currentcolor; border-radius: 50%; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor 0px 8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor -6px 6px 0px -3px, currentcolor 6px -6px 0px -3px, currentcolor 6px 6px 0px -3px; }"
			]
		],
		[
			"sun-horizon-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 5px; width: 18px; height: 1px; border-top: 1px solid rgb(255, 255, 255); background-color: currentcolor; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 9px; width: 6px; height: 6px; border-radius: 50%; background-color: currentcolor; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-image: initial; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor 6px -6px 0px -3px; }"
			]
		],
		[
			"sunrise-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 5px; width: 18px; height: 1px; background-color: currentcolor; border-top: 1px solid rgb(255, 255, 255); }',
				'.extend i::before { content: ""; position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; border-bottom: 2px solid currentcolor; border-left: 2px solid transparent; border-right: 2px solid transparent; }',
				".extend i { position: absolute; left: 2px; top: 2px; width: 2px; height: 3px; color: rgb(255, 255, 255); background-color: currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 9px; width: 6px; height: 6px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-image: initial; background-color: currentcolor; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor 6px -6px 0px -3px; }"
			]
		],
		[
			"sunset-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 6px; width: 18px; height: 1px; background-color: currentcolor; border-top: 1px solid rgb(255, 255, 255); }',
				'.extend i::before { content: ""; position: absolute; left: -1px; top: 2px; width: 0px; height: 0px; border-top: 2px solid currentcolor; border-left: 2px solid transparent; border-right: 2px solid transparent; }',
				".extend i { position: absolute; left: 2px; top: 2px; width: 2px; height: 3px; color: rgb(255, 255, 255); background-color: currentcolor; }",
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 6px; margin-top: 9px; width: 6px; height: 6px; border-radius: 50%; border-width: 1px; border-style: solid; border-color: currentcolor currentcolor transparent; border-image: initial; background-color: currentcolor; box-shadow: currentcolor -8px 0px 0px -3px, currentcolor 8px 0px 0px -3px, currentcolor 0px -8px 0px -3px, currentcolor -6px -6px 0px -3px, currentcolor 6px -6px 0px -3px; }"
			]
		],
		[
			"raindrop-solid",
			[
				".extend { position: absolute; }",
				'.extend::before { content: ""; position: absolute; }',
				'.extend::after { content: ""; position: absolute; }',
				".extend i { position: absolute; }",
				'.extend i::before { content: ""; position: absolute; }',
				'.extend i::after { content: ""; position: absolute; }',
				".extend { color: rgb(0, 0, 0); position: absolute; margin-left: 5px; margin-top: 5px; width: 10px; height: 10px; background-color: currentcolor; border: 1px solid currentcolor; border-radius: 6px 6px 6px 0px; transform: rotate(135deg); }"
			]
		]
	])
};
