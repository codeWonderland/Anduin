mq = window.matchMedia( "(max-width: 768px)" )

$(document).ready ->
  container = document.getElementById('creator-container')
  tempHTML = ''
  if mq.matches
    tempHTML += '<div class="champ-card">'
    tempHTML += '<h1>' + user.DisplayName + '</h1>'
    tempHTML += '<img style="width: 100%; height: auto;" src="' + user.ProfilePicture + '" class="profile-picture" />'
    tempHTML += '<p class="user-detail">' + user.PrimaryGame
    if user.SecondaryGame?
      tempHTML += ' | ' + user.SecondaryGame + '</p>'
    else
      tempHTML += '</p>'
    tempHTML += '<p class="user-detail">' + user.City + '</p>'
    tempHTML += '<p class="user-detail">Last Logged In: ' + convertMsToDate(user.LastLoggedIn) + '</p>'
    tempHTML += '</div><div class="champ-card">'
    tempHTML += '<p class="user-bio">' + user.Bio + '</p>'
    tempHTML += '</div>'
  else
    return
  container.innerHTML = tempHTML
  return