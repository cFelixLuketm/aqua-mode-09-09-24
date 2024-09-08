

if (document.body.contains(document.getElementById('collectionOneCount'))) {
  const collectionOneTitle = document.getElementById('collectionOneTitle')
  collectionOneTitle.addEventListener('mouseover', (event) => {
    collectionOneCount.classList.add('hovered');
  });

  collectionOneTitle.addEventListener('mouseout', (event) => {
    collectionOneCount.classList.remove('hovered');
  });
} else {
  null
 };


if (document.body.contains(document.getElementById('collectionTwoCount'))) {
  const collectionTwoTitle = document.getElementById('collectionTwoTitle')
  collectionTwoTitle.addEventListener('mouseover', (event) => {
    collectionTwoCount.classList.add('hovered');
  });

  collectionTwoTitle.addEventListener('mouseout', (event) => {
    collectionTwoCount.classList.remove('hovered');
  });
} else {
  null
 };
