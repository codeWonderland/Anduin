// Generated by CoffeeScript 1.12.6
(function() {
  $(document).ready(function() {
    createTempHome();
  });

  this.createTempHome = function() {
    return getRequest('/creators/getCreators', function(response) {
      var dm, i, len;
      response = mergeSort(response);
      for (i = 0, len = response.length; i < len; i++) {
        dm = response[i];
        document.getElementById('dm-list').innerHTML += '<a href="/creators/' + dm._Id + '"><div class="champ-card dm-card"><h2>' + dm.DisplayName + '</h2></div></a>';
      }
    });
  };

  this.mergeSort = function(arr) {
    var left, middle, right;
    if (arr.length < 2) {
      return arr;
    }
    middle = parseInt(arr.length / 2);
    left = arr.slice(0, middle);
    right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  };

  this.merge = function(left, right) {
    var result;
    result = [];
    while (left.length && right.length) {
      if (left[0].DisplayName <= right[0].DisplayName) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  };

}).call(this);

//# sourceMappingURL=index.js.map