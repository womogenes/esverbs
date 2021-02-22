// Load the library
let conjugator = new jsESverb();

const update = verb => {
  let result = conjugator.conjugate(verb);
    
  for (let form in result) {
    $(`.${form}`).text(result[form]);
  }

  //$('#verb-input').select();
  localStorage.setItem('verb', $('#verb-input').val());
}

$('#verb-input').on('keyup', e => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    update($('#verb-input').val());
    $('#verb-input').select();
  }
});

// Focus on text box when loaded
$('#verb-input').focus();

// Get verb from local storage
let storedVerb = localStorage.getItem('verb');
if (storedVerb) {
  $('#verb-input').val(storedVerb);
  $('#verb-input').select();
  update(storedVerb);
}