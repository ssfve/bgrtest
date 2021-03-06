nameEN = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN
var header_title = nameCN + nameEN

var array = [];
var part = [];
var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_pre = '<li class="mui-table-view-cell">';
var list_seg_post = '</li>';

var stack_seg_class = 'mui-table-view-cell';
var stack_seg_class = 'mui-table-view-cell mui-collapse';

var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
var img_text_seg = '<img src="../img/%data%" alt="Error!Refresh!" width="100%" data-preview-src="" data-preview-group="1"/>';

var stack_seg_header_prefix = '<a class="mui-navigate-right" href="#">';
var stack_seg_header_postfix = '</a>';
var stack_seg_content_prefix = '<div class="mui-collapse-content">';
var stack_seg_content_postfix = '</div>';
var stack_seg_prefix = '<li class="mui-table-view-cell mui-collapse">';
var stack_seg_postfix = '</li>';

var stack_seg_header = '<a class="mui-navigate-right" href="#">%data%</a>';
var stack_seg_content = '<div class="mui-collapse-content">%data%</div>';
var stack_seg = '<li class="mui-table-view-cell mui-collapse">%data%</li>';

var list_line = '';
var text_line = '';
var stack_line = '';
var final_html = '';

var generate = function(array){
	array.forEach(function(val,index){
		//alert(text_line);
		if(val.substr(0,1)==='S'){
			if(val.substr(1,1)==='E'){
				//alert(list_line);
				re = new RegExp(list_seg_pre,"g");
				list_line = list_line.replace(re,'<p class="add-margin-top add-margin-bottom">');
				re = new RegExp(list_seg_post,"g");
				list_line = list_line.replace(re,'</p>');
				//alert(list_line);
				//alert(stack_seg_content.replace('%data%',list_line))
				stack_line += stack_seg_content.replace('%data%',list_line);
				
				list_line = stack_seg.replace('%data%',stack_line);
				stack_line = '';
			}else{
				var text = val.substr(1,val.length);
				stack_line += stack_seg_header.replace('%data%',text)
			}
		}
		normal_line(array,index)
	});
	return list_line;
};

var normal_line = function(array,index){
		//alert(text_line);
		var val = array[index]
		if(val.substr(0,1)==='O'){
			if(val.substr(1,1)==='E'){
				var text = val.substr(2,val.length);
				text_line += orange_text_seg.replace('%data%',text)
				list_line += list_seg.replace('%data%',text_line)
				text_line = ''
			}else{
				var text = val.substr(1,val.length);
				text_line += orange_text_seg.replace('%data%',text)
			}
		}
		if(val.substr(0,1)==='G'){
			if(val.substr(1,1)==='E'){
				var text = val.substr(2,val.length);
				text_line += grey_text_seg.replace('%data%',text)
				list_line += list_seg.replace('%data%',text_line)
				text_line = ''
			}else{
				var text = val.substr(1,val.length);
				text_line += grey_text_seg.replace('%data%',text)
				//list_line += list_seg.replace('%data%',text_line)
			}
		}
		if(val.substr(0,1)==='I'){
			var text = val.substr(1,val.length);
			text_line = img_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
		}
		//alert(list_line) ;
	return list_line;
};

$("title").html(pageTitle);
$(document).ready(function() {
	$('#header_title').html(header_title);
});