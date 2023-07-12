// const React = require('react');
// const { locals } = require('express/lib/application');
//
// module.exports = function Header({ title, uid, isAdmin }) {
//   console.log(locals);
//   return (
//     <header>
//       <div><a href="/">AFMS</a></div>
//       {title === 'Авторизоваться' || title === 'Регистрация' || title === 'Ошибка сервера' ? (
//         <nav>
//           <ul>
//             <li />
//           </ul>
//         </nav>
//       ) : (
//         <nav>
//           <ul>
//             <li><a href="/">В магазин</a></li>
//             <li><a href="/cart">Корзина</a></li>
//             {uid ? (
//               <>
//                 <li><a href="/orders">Заказы</a></li>
//                 <li>
//                   <form action="/logout" method="POST">
//                     <button>Выйти</button>
//                   </form>
//                   {/* <a href="/logout"><button>Выйти</button></a> */}
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <a href="/login"><button>Войти</button></a>
//               </li>
//             )}
//           </ul>
//         </nav>
//       )}
//       {isAdmin ? (
//         <nav>
//           <li><a href="/admin/products">Управлять товарами</a></li>
//           <li><a href="/admin/orders">Управлять заказами</a></li>
//         </nav>
//       ) : ('')}
//     </header>
//   );
// };
const React = require('react');
const { locals } = require('express/lib/application');

module.exports = function Header({ title, uid, isAdmin }) {
  return (
    <header>
      <div><a href="/">AFMS</a></div>
      {title === 'Авторизоваться' || title === 'Регистрация' || title === 'Ошибка сервера' ? (
        <nav>
          <ul>
            <li />
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            {!isAdmin && (
              <>
                <li><a href="/">В магазин</a></li>
                <li><a href="/cart">Корзина</a></li>
                {uid && (
                  <li><a href="/orders">Заказы</a></li>
                )}
              </>
            )}
            {uid && !isAdmin ? (
              <li>
                <form action="/logout" method="GET">
                  <button>Выйти</button>
                </form>
              </li>
            ) : (
              isAdmin ? (
                <>
                  <li><a href="/admin/products">Управлять товарами</a></li>
                  <li><a href="/admin/orders">Управлять заказами</a></li>
                  <li><a href="/logout"><button>Выйти</button></a></li>
                </>
              ) : (
                <form action="/logout" method="GET">
                  <button>Выйти</button>
                </form>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};
