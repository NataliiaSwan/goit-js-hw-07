const items = document.querySelectorAll('li.item');
console.log(`categories: ${items.length}`);

items.forEach(item => {
  categories(item);
});
function categories(category) {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElementsCount = category.querySelectorAll('li').length;
  console.log(`category: ${categoryTitle}`);
  console.log(`elements: ${categoryElementsCount}`);
}
