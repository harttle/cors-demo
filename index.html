<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title></title>
</head>

<body>
  <section id="no-ACAO">
    <h1>Fails if Access-Control-Allow-Origin Not Set</h1>
    <button>Click to Send XHR</button>
  </section>

  <section id="wildcard-ACAO">
    <h1>Success if Access-Control-Allow-Origin Set to Wildcard</h1>
    <button>Click to Send XHR</button>
  </section>

  <section id="non-simple-request">
    <h1>Non-Simple Request</h1>
    <button>Click to Send XHR</button>
  </section>

  <section id="wildcard-ACAO-with-credentials">
    <h1>Fails to Send Cookie when Access-Control-Allow-Origin set to Wildcard</h1>
    <button>Click to Send XHR</button>
  </section>
  <section id="no-ACAC-with-credentials">
    <h1>Fails when Access-Control-Allow-Credentials Not Set</h1>
    <button>Click to send XHR</button>
  </section>

  <section id="specific-ACAO-with-credentials">
    <h1>Success to Send Cookie when Access-Control-Allow-Origin set specificly</h1>
    <button>Click to Send XHR</button>
  </section>

  <section id="redirect-simple-req">
    <h1>Redirect Simple Request </h1>
    <button>Click to Send XHR</button>
  </section>

  <section id="redirect-non-simple-req">
    <h1>Redirect Non-Simple Request </h1>
    <button>Click to Send XHR</button>
  </section>

  <section id="redirect-simple-req-twice">
    <h1>Redirect Simple Request Twice</h1>
    <button>Click to Send XHR</button>
  </section>

  <script>
    click('#non-simple-request', function() {
      var xhr = createXHR('http://mid.com:4001/access-control-allow-origin-wildcard');
      xhr.setRequestHeader('x-foo', 'bar');
      xhr.send();
    });

    click('#redirect-simple-req-twice', function() {
      var xhr = createXHR('http://mid.com:4001/redirect-to-redirect');
      xhr.send();
    });

    click('#redirect-non-simple-req', function() {
      var xhr = createXHR('http://mid.com:4001/redirect');
      xhr.setRequestHeader('x-foo', 'bar');
      xhr.send();
    });

    click('#redirect-simple-req button', function() {
      var xhr = createXHR('http://mid.com:4001/redirect');
      xhr.send();
    });

    click('#no-ACAO button', function() {
      var xhr = createXHR('http://dest.com:4001/access-control-allow-origin-not-set');
      xhr.send();
    });

    click('#wildcard-ACAO button', function() {
      var xhr = createXHR('http://dest.com:4001/access-control-allow-origin-wildcard');
      xhr.send();
    });

    click('#wildcard-ACAO-with-credentials button', function() {
      document.cookie = 'author=harttle';
      var xhr = createXHR('http://dest.com:4001/wildcard-allow-origin-with-credentials');
      xhr.withCredentials = true;
      xhr.send();
    });

    click('#no-ACAC-with-credentials button', function() {
      document.cookie = 'author=harttle';
      var xhr = createXHR('http://dest.com:4001/allow-credentials-not-set');
      xhr.withCredentials = true;
      xhr.send();
    });

    click('#specific-ACAO-with-credentials button', function() {
      document.cookie = 'author=harttle';
      var xhr = createXHR('http://dest.com:4001/specific-allow-origin-with-credentials');
      xhr.withCredentials = true;
      xhr.send();
    });


    function click(sel, func) {
      var el = document.querySelector(sel);
      el.addEventListener('click', func);
    }

    function createXHR(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        var msg = 'status:' + xhr.status + ' body:' + xhr.responseText;
        console.log(msg);
      };
      return xhr;
    }
  </script>
</body>

</html>
