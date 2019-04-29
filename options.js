// Saves options to chrome.storage
function save_options() {
  var websites = document.getElementById('websites').value;
  var minutes = document.getElementById('minutes').value;
  chrome.storage.sync.set({
    websites: websites.split(','),
    minutes: minutes
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get('websites', function(items) {
    console.log('items retrieved');
    console.log(items);
    document.getElementById('websites').value = items.websites;
  });
  chrome.storage.sync.get('minutes', function(items) {
    console.log('minutes retrieved');
    console.log(items);
    document.getElementById('minutes').value = items.minutes;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
