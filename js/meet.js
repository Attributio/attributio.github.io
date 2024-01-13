var form = document.getElementById('meetform');
  if (form.attachEvent) {
    form.attachEvent("submit", processForm);
  } else {
    form.addEventListener("submit", processForm);
  }

  function getJourney(at, tp) {
    var j = at.map(function (s) {
      return s[tp];
    });
    return j.filter(Boolean).join('>');
  }

  function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    // var cid = google_tag_manager['GTM-WXK2VG6'].dataLayer.get('clientId');
    var att = JSON.parse(localStorage.getItem('__att'))
    var fis = att[0];
    var lis = att[att.length - 1];
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    var form = document.getElementById('meetform');
    var formData = new FormData(form);

    // formData.append("gcid", cid);
    formData.append("fis", fis['sc']);
    formData.append("fim", fis['md']);
    formData.append("fic", fis['cp']);
    formData.append("fit", fis['tm']);
    formData.append("filp", fis['lp']);
    formData.append("fir", fis['rf']);
    formData.append("fiv", fis['vi']);
    formData.append("fist", fis['st']);
    formData.append("fisd", fis['sd']);
    formData.append("lis", lis['sc']);
    formData.append("lim", lis['md']);
    formData.append("lic", lis['cp']);
    formData.append("lit", lis['tm']);
    formData.append("lilp", lis['lp']);
    formData.append("lir", lis['rf']);
    formData.append("liv", lis['vi']);
    formData.append("list", lis['st']);
    formData.append("lisd", lis['sd']);
    formData.append("tz", tz);
    formData.append("jsc", getJourney(att, 'sc'));
    formData.append("jmd", getJourney(att, 'md'));
    formData.append("jcp", getJourney(att, 'cp'));

    var xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://hooks.zapier.com/hooks/catch/5332346/oomde6v/', true);
    xhr.send(formData);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200 && response.status === 'success') {
          window.location.href = "/thanks/";
        } else {
          alert(JSON.stringify(response));
        }
      }
    }

    return false;
  }