(function ($) {

	$.fn.wait = function(time, type)
	{
		time = time || 1000;
		type = type || "fx";
		return this.queue(type, function() {
			var self = this;
			setTimeout(function() {
				$(self).dequeue();
			}, time);
		});
	}

	$.fn.hoverWindow = function(settings)
	{
		var config = {
			'attr':'href',
			'disabletext':false,
			'prepend':'',
			'width':'',
			'height':'',
			'backgroundColor' : 'white'
		};

		if(settings)
		{
			$.extend(config, settings);
		}

		function tooltip()
		{
			if(!$('#tooltip').length)
			{
				var $tooltip = $('<div/>')
					.attr('id','tooltip')
					.hide()
					.prependTo('body');

				if(config.width.length)
					$tooltip.css('width',config.width);
				if(config.height.length)
					$tooltip.css('height',config.height);

				$tooltip
					.css('position','absolute')
					.css('background-color',config.backgroundColor)
					.css('border','solid 1px black')
					.css('-moz-box-shadow','0px 0px 2px #000')
					.css('-webkit-box-shadow','0px 0px 2px #000')
					.css('padding','5px')
					.css('z-index','100')
					.css('opacity','0')
					.mouseover(function()
					{
						$(this).remove();
					});
				return $tooltip;
			} else {
				return $('#tooltip');
			}
		}

		var topCord, leftCord;

		var adjust_location = function($self,event,_topCord,_leftCord)
		{
			_topCord = event.clientY+15;
			if((tooltip().innerHeight()+_topCord) > ($(window).height()-tooltip().innerHeight()))
			{
				_topCord-=tooltip().innerHeight()+25;
			}

			_leftCord = event.clientX+15;
			if((tooltip().innerWidth()+_leftCord) > ($(window).width()))
			{
				_leftCord-=tooltip().innerWidth()+25;
			}

			tooltip()
			.css('top',_topCord)
			.css('left',_leftCord)
			.html(
				(
					!config.disabletext
						? (config.prepend.length?config.prepend:'<strong>' + $self.text() + '</strong>' + '<br />') +
							$self.attr(config.attr)
						: (config.prepend.length?config.prepend:'<strong>' + $self.attr(config.attr) + '</strong>')
					)
				);
		}

		this.each(function(i){

			var $self = $(this);
			$self
				.mousemove(function(event)
				{
					adjust_location($self,event,topCord,leftCord);
				})
				.mouseover(function(event){
					adjust_location($self,event,topCord,leftCord);
					tooltip()
						.show()
						.wait(250)
						.animate({
							opacity: 1
						}, {
							duration: 550
						}, 'linear');
				})
				.mouseout(function(){
					tooltip()
					.stop()
					.remove();
				});
		});
	};

})(jQuery);

$(document)
	.data('counter',0);

function createDialog(_title,_url)
{
	var incrementor = ($(document).data().counter++)+1;

	$('#link_content').prepend(ich.window_frame_tmpl({
		incrementor:incrementor,
		_url:_url,
		_title:_title
	}));

	var $window_frame_btn = ich.window_frame_btn_tmpl({
		incrementor:incrementor,
		_title:_title
	});

	$window_frame_btn.hoverWindow({
		'attr':'info',
		'disabletext':true,
		'width':'500px'
	});

	$('#open_windows').prepend($window_frame_btn);
}

function process_data(json)
{

	var location,info;
	var $container = $('#content');
	$container.empty();

	$.each(json,function(key, dateGroup)
	{
		var $date_header = ich.render_display_date_tmpl({
			'date':dateGroup.date
		});
		$container.append($date_header);

		var $dateGroup = ich.render_display_date_group_tmpl();
		$container.append($dateGroup);

		var tmp_location_switch = '';

		$.each(dateGroup.records, function(key, locationGroup)
		{
			var location = locationGroup.location.split('.')[0];
			if(tmp_location_switch != location)
			{
				if(!$('div[group='+location+']',$dateGroup).length)
				{
					$dateGroup.append(ich.render_display_date_group_location_tmpl({
						'group':location
					}));
				}
			}

			tmp_location_switch = location;

			info = locationGroup.info;

			var $row = ich.render_display_date_group_location_node_tmpl({
				'href':info.source,
				'title':info.title
			});
			$('ul[group='+location+']',$dateGroup).append($row);

		});

		var $newOrder = $('div[group]',$dateGroup).get();
		$newOrder.sort(function(a , b)
		{
			return $(a).attr('group') > $(b).attr('group')?1:-1;
		});
		$dateGroup.empty();
		$dateGroup.append($newOrder);
//		console.log('blah',$('div[group]',$dateGroup));

	});

	$('#buttons').show();
	$('#search_btn').val('Search Craigslist');
	$('#loader').hide();
	$.getScript('/assets/js/nav.js');

}

function content_size()
{
	$('#content-container').css('left',$('#find_items').innerWidth(true));
	$('#content, #link_content').css({
		'height':$(window).height()-70,
		'width':$(window).width() - ($('#find_items').innerWidth(true)+25),
		'margin-left':'10px'
	});

	var $link_content = $('#link_content');
	$('iframe').each(function(i, obj)
	{
		$(this).css({
			'height':parseInt($link_content.css('height').replace('px', '')) - 50 + 'px',
			'width':parseInt($link_content.css('width').replace('px', '')) - 50 + 'px'			
		});
	});
}

function hoverReset()
{
	$('#buttons a.button, #open_windows a.button').removeClass('hover');
	$(this).addClass('hover');
}

function showSearch()
{
	$('#content, #toggle_disp').show();
	$('#link_content, #show_search').hide();
	$('title').text($(document).data().title);
}

$(document)
	.on('click', 'h1',function()
	{
		$(this).next('div.date').toggle();
	})
	.on('click', '#content h2',function()
	{
		$(this).next('ul').toggle();
	})
	.on('click', '#content ul.locationItems li a.jobsite', function(event)
	{
		event.preventDefault();
		createDialog($(this).text(),$(this).attr('href'));
	})
	.on('click', '#open_windows .windowLink',function(event)
	{
		event.preventDefault();
		hoverReset();
		$(this).addClass('hover');
		$('#open_windows, #link_content').show();
		$('#content, .window').hide();
		var id = $(this).attr('rel');
		var $link_content = $('#link_content');
		$('#iframe_'+id).css({
			'height':parseInt($link_content.css('height').replace('px', '')) - 50 + 'px',
			'width':parseInt($link_content.css('width').replace('px', '')) - 50 + 'px'
		});
		$('#show_search, #window_'+id).show();
		$('#toggle_disp').hide();
		$('title').text($(document).data().title+' : '+$(this).attr('info'));
	})
	.on('click', '#open_windows a.windowLink span',function()
	{
		event.preventDefault();
		var $parent = $(this).parent();
		var id = $parent.attr('rel');
		$('#window_'+id).remove();
		$parent.remove();
		showSearch();
	});

function buildFormList(json)
{
	if($('#areas_list').length)
	{
		$.each(json.area_list,function(i,obj)
		{
			var $area_list_label = ich.area_list_tmpl({
				'type':obj.type,
				'partial':obj.partial,
				'name':obj.name,
				'state':obj.state
			});
			$('#areas_list').append($area_list_label);
		});
	}

	if($('#region_list').length)
	{
		$.each(json.region_list,function(i, obj)
		{
			var $region_list_label = ich.region_list_tmpl({
				'type':obj.type,
				'partial':obj.partial,
				'name':obj.name
			});
			$region_list_label.find('input').on('click', function()
			{
				var region = $(this).val();
				var str = 'input[name="include[]"].'+region;
				var $regions = $(str);
				if($(this).is(':checked'))
				{
					$regions.attr('checked','checked');
				}
				else
				{
					$regions.removeAttr('checked');
				}
			});
			$('#region_list').append($region_list_label);
		});
	}
}

$(function()
{

	$('#show_search')
		.on('click', function(event)
		{
			event.preventDefault();
			showSearch();
		});

	$('#areas_list_disp, #region_list_disp')
		.data('show',false)
		.on('click', function()
		{
			if($(this).data().show)
			{
				$(this)
				.text('open')
				.data('show',false);
			}
			else
			{
				$(this)
				.text('close')
				.data('show',true);
			}
			$('#'+$(this).attr('data-toggle')).toggle();
		});

	$(document)
		.data('title',$('title').text());

	$('#buttons a.button')
		.on('click', hoverReset);

	$('#toggle_disp')
		.data('open',true)
		.on('click', function(event)
		{
			event.preventDefault();
			if($(this).data().open)
			{
				$(this).text('Expand All');
				$('#content div.date').hide();
				$('#content div.date ul').css('display','none');
				$(this).data().open = false;
			}
			else
			{
				$('#content div.date').show();
				$('#content div.date ul').css('display','block');
				$(this).data().open = true;
				$(this).text('Close All');
			}
			$('#show_search').hide();
		});

	$('#search_btn')
		.on('click', function(event){
			event.preventDefault();
			$('#find_items').submit();
		});

	$('#find_items')
		.on('submit', function()
		{
			if(!$('input[name="include[]"]:checked').length)
			{
				$('input[value="socal"]').attr('checked','checked');
				$('input[name="include[]"].socal').attr('checked','checked');
			}
			if($('#search_term').val() == "")
			{
				$('#search_term').css({
					'-moz-box-shadow':'0px 0px 2px red',
					'-webkit-box-shadow':'0px 0px 2px red',
					'border':'solid 1px red'
				});
				return false;
			}
			$('#loader').show();
			$('#content').show().html('Loading...');
			$('#search_btn').val('searching');
			$('#link_content, #buttons').hide();
			$.ajax({
				type: "POST",
				url: '/',
				data: $('#find_items').serialize(),
				dataType: 'json',
				success: function(json)
				{
					process_data(json);

				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					try{
						console.log(XMLHttpRequest, textStatus, errorThrown);
					}
					catch(e){}
				}
			});
			return false;
		});

	content_size();

	$(window)
		.resize(content_size);

});