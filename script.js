// $('div').on('click',function () {
//     console.log('проверка клика');
//   })
// $('div').on('click',function () {
//     $(this).html('проверка клика');
//     console.log($(this).html);
//   })
// $('div').on('click', function () {
//     $(this).css({
//         transition: '1s',
//         background:  'red',
//         width: '50%'
//     })
//   })
// $('div').on('click',function () {
//     $(this).toggleClass('active')
//   })
// $('div').on('click',function () {
//     $(this).height('50px')
//   })
// $('div').hover(function () {
//     $(this).height('30vh')
// },function () {
//     $(this).height('250px')
// })
// $('div').dblclick(function () {
//     $(this).css({
//         background: 'darkblue',
//         width: Math.floor(Math.random()*100)+'px'
//     })
//  })

// $('div').dblclick(function () {
//     $(this).attr('class','active')
//  })

// $('div').dblclick(function () {
//     $(this).attr({
//         title:'Проверка атрибута',
//         class: 'active'
//     })
//     console.log('title');
//   })
  
$('div').dblclick(function () {
    $(this).removeAttr('class')
  })