document.addEventListener('DOMContentLoaded', function() {
    fetch('data/product.json')
    .then(response => response.json())
    .then(products => {
        const productTable = document.getElementById('productTable');
         for (let i = 0; i < products.length; i++) {
        const p = products[i];

        const tr = document.createElement('tr');

        tr.innerHTML = `
          <td>${p.id}</td>
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td>${p.description}</td>
        `;

        productTable.appendChild(tr);
      }
    })
    .catch(error => console.error('エラー:', error));
});
