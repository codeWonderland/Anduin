// Generated by CoffeeScript 1.12.6
(function() {
  var HOST;

  HOST = '';

  $(document).ready(function() {
    switch (window.location.pathname.trunc(3)) {
      case 'cre':
        setActive('Creators');
        break;
      case 'art':
        setActive('Art');
        break;
      case 'sto':
        setActive('Stories');
        break;
      case 'exp':
        setActive('Explore');
        break;
      default:
        setActive('Home');
    }
  });

  this.String.prototype.trunc = function(n) {
    if (this.length > n) {
      return this.substr(1, n);
    } else {
      return this;
    }
  };

  this.setActive = function(navItem) {
    var item, j, k, len, len1, ref, ref1;
    ref = $('.nav.navbar-nav')[0].getElementsByTagName('li');
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      if ($(item).hasClass('active')) {
        $(item).removeClass('active');
      }
    }
    ref1 = $('.nav.navbar-nav')[0].getElementsByTagName('li');
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      item = ref1[k];
      if (item.getElementsByTagName('a')[0].innerHTML === navItem) {
        $(item).addClass('active');
      }
    }
  };

  this.postRequest = function(path, data, success) {
    $.ajax({
      url: HOST + path,
      type: 'POST',
      data: data,
      dataType: 'JSON',
      success: function(response) {
        success(response);
      }
    });
  };

  this.getRequest = function(path, success) {
    $.ajax({
      url: HOST + path,
      type: 'GET',
      success: function(response) {
        success(response);
      }
    });
  };

  this.guid = function() {
    var s4;
    s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  this.convertMsToDate = function(ms) {
    var day, month, months, time, year;
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    time = new Date(ms);
    year = time.getFullYear();
    month = time.getMonth();
    day = time.getDate();
    return months[month] + ' ' + day + ', ' + year;
  };

  this.textToBin = function(text) {
    var bin, i, length, output;
    length = text.length;
    output = [];
    i = 0;
    while (i < length) {
      bin = text[i].charCodeAt().toString(2);
      output.push(Array(8 - bin.length + 1).join('0') + bin);
      i++;
    }
    return output.join(' ');
  };

  this.encrypt = function(message) {
    var bin, enc, i, key, output;
    key = textToBin(message[message.length - 1]);
    output = [];
    i = 0;
    while (i < message.length - 1) {
      bin = textToBin(message[i]);
      enc = bin ^ key;
      output.push(('00000000' + enc).slice(-8));
      i++;
    }
    output.push(key);
    return output.join(' ');
  };

}).call(this);

//# sourceMappingURL=global.js.map
