var url = 'https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js';

var items = [];
var details = [];

var date;
var month;
var day;
var year;

$.getJSON(url, function getData(data){
    
  for(var key in data){

    if(typeof data[key] === 'object' && data[key] !== null){

      getData(data[key]);

    }else if(data.hasOwnProperty('name') && !items.includes(data['name']) && !isNaN(data.msrpInCents)){

        date = new Date(data.createdAt);
        month = date.getMonth()+1;
        day = date.getDate();
        year = date.getFullYear();
       
        date = month + '/' + day + '/' + year;

        items.push(data['name']);

        $('div').prepend('<img src=' + data.mainImage.ref + '><p>' + data['name'] + ' $' + data.msrpInCents/100 + ' ' + date + '</p>');
    }
  }    
});

$('#greaterThanOr20').click(function(){
  
  items = [];
  $('div').empty();

  $.getJSON(url, function getData(data){

    for(var key in data){

      if(typeof data[key] === 'object' && data[key] !== null){

        getData(data[key]);

      }else if(data.hasOwnProperty('name') && !items.includes(data['name']) && data.msrpInCents/100 >= 20){
    
        date = new Date(data.createdAt);
        month = date.getMonth()+1;
        day = date.getDate();
        year = date.getFullYear();
       
        date = month + '/' + day + '/' + year;

        items.push(data['name']);

        $('div').prepend('<img src=' + data.mainImage.ref + '><p>' + data['name'] + ' $' + data.msrpInCents/100 + ' ' + date + '</p>');
      }
    }
  });            
});
  
$('#all').click(function(){
  
  items = [];
  $('div').empty();
  
  $.getJSON(url, function getData(data){
  
    for(var key in data){

      if(typeof data[key] === 'object' && data[key] !== null){

        getData(data[key]);

      }else if(data.hasOwnProperty('name') && !items.includes(data['name']) && !isNaN(data.msrpInCents)){

        date = new Date(data.createdAt);
        month = date.getMonth()+1;
        day = date.getDate();
        year = date.getFullYear();
       
        date = month + '/' + day + '/' + year;

        items.push(data['name']);

        $('div').prepend('<img src=' + data.mainImage.ref + '><p>' + data['name'] + ' $' + data.msrpInCents/100 + ' ' + date + '</p>');
      }
    }
  });
});