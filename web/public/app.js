var events  = new EventSource('/ticker')
,   element = document.getElementById('content');

events.onmessage = function (incoming) {
  incoming = JSON.parse(incoming.data);

  var item = document.createElement('li')
  ,   output;

  output = document.createTextNode(
    JSON.stringify(incoming)
  );

  item.appendChild(output);
  element.appendChild(item);
  element.insertBefore(item, element.firstChild);
};
