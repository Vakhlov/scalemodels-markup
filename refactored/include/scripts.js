function xoopsGetElementById(id) {
	return jQuery('#'+id).get(0);
/*if (document.getElementById(id)) {
	return document.getElementById(id);
	} else if (document.all[id]) {
		return document.all[id];
		} else if (document.layers && document.layers[id]) {
			return (document.layers[id]);
			} else {
				return false;
			}*/
}

function toggle_visibility(id, flag)  {
	if (xoopsGetElementById(id)) {
		xoopsGetElementById(id).style.visibility = (flag) ? 'visible' : 'hidden';
	}
}


function justReturn() {
	return;
}


function openWithSelfMain(url,name,width,height) {
	var options = "width=" + width + ",height=" + height + "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no";

	new_window = window.open(url, name, options);
	window.self.name = "main";
	new_window.moveTo(((screen.availWidth/2)-(width/2)),((screen.availHeight/2)-(height/2)))
	new_window.focus();
}


function setElementColor(id, color) {
	xoopsGetElementById(id).style.color = "#" + color;
}


function setElementFont(id, font) {
	xoopsGetElementById(id).style.fontFamily = font;
}


function setElementSize(id, size) {
	xoopsGetElementById(id).style.fontSize = size;
}


function changeDisplay(id) {
	var elestyle = xoopsGetElementById(id).style;

	if (elestyle.display == "") {
		elestyle.display = "none";
	} else {
		elestyle.display = "block";
	}
}

function toggleDisplay(id) {
	var elestyle = xoopsGetElementById(id).style;

	if (elestyle.display == "block" || elestyle.display == "") {
		elestyle.display = 'none';
	} else {
		elestyle.display = "block";
	}
}

function setVisible(id) {xoopsGetElementById(id).style.visibility = "visible";}

function setHidden(id) {xoopsGetElementById(id).style.visibility = "hidden";}


function makeBold(id) {
	var eleStyle = xoopsGetElementById(id).style;

	if (eleStyle.fontWeight != "bold") {
		eleStyle.fontWeight = "bold";
	} else {
		eleStyle.fontWeight = "normal";
	}
}


function makeItalic(id) {
	var eleStyle = xoopsGetElementById(id).style;

	if (eleStyle.fontStyle != "italic") {
		eleStyle.fontStyle = "italic";
	} else {
		eleStyle.fontStyle = "normal";
	}
}


function makeUnderline(id) {
	var eleStyle = xoopsGetElementById(id).style;

	if (eleStyle.textDecoration != "underline") {
		eleStyle.textDecoration = "underline";
	} else {
		eleStyle.textDecoration = "none";
	}
}


function appendSelectOption(selectMenuId, optionName, optionValue) {
	var selectMenu = xoopsGetElementById(selectMenuId);
	var newoption  = new Option(optionName, optionValue);

	selectMenu.options[selectMenu.length] = newoption;
	selectMenu.options[selectMenu.length].selected = true;
}


function disableElement(target) {
	var targetDom = xoopsGetElementById(target);

	if (targetDom.disabled != true) {
		targetDom.disabled = true;
	} else {
		targetDom.disabled = false;
	}
}


function xoopsCheckAll(formname, switchid) {
	var ele = document.forms[formname].elements;
	var switch_cbox = xoopsGetElementById(switchid);

	for (var i=0; i<ele.length; i++) {
		var e = ele[i];
		if ( (e.name != switch_cbox.name) && (e.type == 'checkbox') ) {
			e.checked = switch_cbox.checked;
		}
	}
}

/***************************************
* From XOOPSDhtmlArea
***************************************/

var clientPC = navigator.userAgent.toLowerCase();
var clientVer = parseInt(navigator.appVersion);
var is_ie = ((clientPC.indexOf("msie") != -1) && (clientPC.indexOf("opera") == -1));
var is_win   = ((clientPC.indexOf("win")!=-1) || (clientPC.indexOf("16bit") != -1));
var is_nav = ((clientPC.indexOf('mozilla')!=-1) && (clientPC.indexOf('spoofer')==-1)
                && (clientPC.indexOf('compatible') == -1) && (clientPC.indexOf('opera')==-1)
                && (clientPC.indexOf('webtv')==-1) && (clientPC.indexOf('hotjava')==-1));
var is_moz = 0;
var is_mac = (clientPC.indexOf("mac")!=-1);

// From http://www.massless.org/mozedit/
function mozWrap(txtarea, open, close) {
	var selLength = txtarea.textLength;
	var selStart = txtarea.selectionStart;
	var selEnd = txtarea.selectionEnd;
	if (selEnd == 1 || selEnd == 2) {
		selEnd = selLength;
	}

	var s1 = (txtarea.value).substring(0,selStart);
	var s2 = (txtarea.value).substring(selStart, selEnd)
	var s3 = (txtarea.value).substring(selEnd, selLength);
	txtarea.value = s1 + open + s2 + close + s3;
	return;
}

// Insert at Claret position. Code from
// http://www.faqts.com/knowledge_base/view.phtml/aid/1052/fid/130
function storeCaret(textEl) {
	if (textEl.createTextRange) {
		textEl.caretPos = document.selection.createRange().duplicate();
	}
}

// Insert a bbcode in textarea
function insertBB(dom, bbopen, bbclose)  {
	if ((clientVer >= 4) && is_ie && is_win) {
		var text = document.selection.createRange().text;
		if ( !text ) {
			dom.value += bbopen + bbclose;
			dom.focus();
			return;
		} else {
			document.selection.createRange().text = bbopen + text + bbclose;
			dom.focus();
			return;
		}
	} else if (dom.selectionEnd && (dom.selectionEnd - dom.selectionStart > 0)) {
		mozWrap(dom, bbopen, bbclose);
		return;
	} else {
		dom.value += bbopen + bbclose;
		dom.focus();
	}
}


// @todo remake rather equal JS functions
function xoopsCodeBold(id) {
	var bbopen = "[b]";
	var bbclose ="[/b]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeItalic(id) {
	var bbopen = "[i]";
	var bbclose ="[/i]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeUnderline(id) {
	var bbopen = "[u]";
	var bbclose ="[/u]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeStrike(id) {
	var bbopen = "[s]";
	var bbclose ="[/s]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeOverline(id) {
	var bbopen = "[o]";
	var bbclose ="[/o]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeList(id) {
	var bbopen = "[list]";
	var bbclose ="[/list]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeHr(id) {
	var dom  = xoopsGetElementById(id);
	dom.value +=  "[hr]";
}

function xoopsCodeRight(id) {
	var bbopen = "[right]";
	var bbclose ="[/right]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeCenter(id) {
	var bbopen = "[center]";
	var bbclose ="[/center]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeLeft(id) {
	var bbopen = "[left]";
	var bbclose ="[/left]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeJustify(id) {
	var bbopen = "[justify]";
	var bbclose ="[/justify]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeMarqd(id) {
	var bbopen = "[marqd]";
	var bbclose ="[/marqd]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeMarqu(id) {
	var bbopen = "[marqu]";
	var bbclose ="[/marqu]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}



function xoopsCodeMarql(id) {
	var bbopen = "[marql]";
	var bbclose ="[/marql]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeMarqr(id) {
	var bbopen = "[marqr]";
	var bbclose ="[/marqr]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeMarqh(id) {
	var bbopen = "[marqh]";
	var bbclose ="[/marqh]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeMarqv(id) {
	var bbopen = "[marqv]";
	var bbclose ="[/marqv]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}



function xoopsCodeQuote(id) {
	var bbopen = "[quote]";
	var bbclose ="[/quote]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeCode(id) {
	var bbopen = "[code]";
	var bbclose ="[/code]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}



function xoopsCodeSize(id) {
	var sizeDom = xoopsGetElementById(id + "Size");
	var sizeDomValue = sizeDom.options[sizeDom.options.selectedIndex].value;

	var bbopen = "[size=" + sizeDomValue + "]";
	var bbclose ="[/size]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
         
}

function xoopsCodeFont(id) {
	var fontDom = xoopsGetElementById(id + "Font");
	var fontDomValue = fontDom.options[fontDom.options.selectedIndex].value;

	var bbopen = "[font=" + fontDomValue + "]";
	var bbclose ="[/font]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}

function xoopsCodeColor(id) {
	var colorDom           = xoopsGetElementById(id + "Color");
	var colorDomValue      = colorDom.options[colorDom.options.selectedIndex].value;

	var bbopen = "[color=" + colorDomValue + "]";
	var bbclose ="[/color]";
	var dom  = xoopsGetElementById(id);
	insertBB(dom, bbopen, bbclose);
	storeCaret(dom);
}


function xoopsCodeSmilie(id, smilieCode) {
	var textareaDom = xoopsGetElementById(id);

	textareaDom.focus();
	textareaDom.value += smilieCode;
}


/********** MyOwn ******************/

function rc_show_image(u) {
window.open('/modules/myarticles/imagepreview.php?image='+u, '', 'resizable=1, scrollbars=yes');
}
function rc_image_show(u) {rc_show_image(u);}
