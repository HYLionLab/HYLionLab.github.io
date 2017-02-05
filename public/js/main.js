/*
 * Author: @nayunhwan (github.com/nayunhwan)
 * Email: nayunhwan.dev@gmail.com
 */

$(document).ready(function () {

  var github_Url = 'https://api.github.com/';
  var member_data = [
    {
      username: '@kimetree',
      github_url: 'https://github.com/kimtree'
    },
    {
      username: '@mintplo',
      github_url: 'https://github.com/mintplo'
    },
    {
      username: '@leo6104',
      github_url: 'https://github.com/leo6104'
    },
    {
      username: '@nayunhwan',
      github_url: 'https://github.com/nayunhwan'
    },
    {
      username: '@yoonjeewoo',
      github_url: 'https://github.com/yoonjeewoo'
    },
    {
      username: '@zooomg',
      github_url: 'https://github.com/zooomg'
    }
  ]

  // Get Github Organization's Member List
  $.ajax({
    url: github_Url + 'orgs/HYLionLab/members',
    method: 'GET'
  }).done(function (data) {
    // console.log(data);
  })

  // Make Member infomation card list
  member_data.forEach(function (data) {

    var card = $('<div/>').addClass('card');
    var card_img = $('<img/>').addClass('card-img-top');
    var card_block = $('<div/>').addClass('card-block');

    var card_title = $('<h6/>').addClass('card-title').text(data.username);
    var github_button = $('<a/>').addClass('github_button').attr({'href': data.github_url});
    var github_icon = $('<i/>').addClass('xi-github xi-x');
    github_button.append(github_icon);

    card_block.append(card_title);
    card_block.append(github_button);
    card.append(card_block);

    $('.card-list').append(card);
  });

})