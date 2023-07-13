const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function UpdateProduct({
  title, uid, isAdmin, product,
}) {
  const {
    productName, summary, price, description,
  } = product;
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <link rel="stylesheet" href="/css/forms.css" />
      <h1>{title}</h1>
      <form action={`/admin/products/update/${product.id}`} method="POST" encType="multipart/form-data">
        <p>
          <label htmlFor="productName">Название</label>
          <input type="text" id="productName" name="productName" defaultValue={productName} required />
        </p>
        <p>
          <label htmlFor="image">Изображение</label>
          <input type="file" id="image" name="image" defaultValue={product.image} accept="/image/png,image/jpg" />
        </p>
        <p>
          <label htmlFor="summary">Краткое описание</label>
          <input type="text" id="summary" name="summary" defaultValue={summary} required />
        </p>
        <p>
          <label htmlFor="price">Цена</label>
          <input type="number" id="price" name="price" min="50" step="50" defaultValue={price} required />
        </p>
        <p>
          <label htmlFor="description">Описание</label>
          <textarea id="description" name="description" rows="7" defaultValue={description} required />
        </p>
        <p>
          <button type="submit" className="btn">Сохранить</button>
        </p>
      </form>
    </Layout>
  );
};
