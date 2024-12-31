"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65830],{71386:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Esenciales/Inventario/Reporte_Inventario","title":"Reporte de Inventario","description":"En esta secci\xf3n se puede consultar el inventario de productos en el sistema, visualizando informaci\xf3n detallada de cada art\xedculo como el nombre, categor\xeda, stock m\xednimo y actual, precios de venta, costos, entre otros. Tambi\xe9n se puede filtrar la informaci\xf3n y exportarla en formato PDF o Excel.","source":"@site/versioned_docs/version-ProX/Esenciales/Inventario/5-Reporte_Inventario.md","sourceDirName":"Esenciales/Inventario","slug":"/Esenciales/Inventario/Reporte_Inventario","permalink":"/Documentation/docs/ProX/Esenciales/Inventario/Reporte_Inventario","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-ProX/Esenciales/Inventario/5-Reporte_Inventario.md","tags":[],"version":"ProX","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Reporte Kardex","permalink":"/Documentation/docs/ProX/Esenciales/Inventario/Reporte-Kardex"},"next":{"title":"Kardex Valorizado","permalink":"/Documentation/docs/ProX/Esenciales/Inventario/Kardex-Valorizado"}}');var s=o(74848),a=o(28453);const i={},t="Reporte de Inventario",c={},d=[{value:"Acceso al Reporte de Inventario",id:"acceso-al-reporte-de-inventario",level:2},{value:"Filtros de B\xfasqueda",id:"filtros-de-b\xfasqueda",level:2},{value:"Listado de Productos",id:"listado-de-productos",level:2},{value:"Exportar Resultados",id:"exportar-resultados",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"reporte-de-inventario",children:"Reporte de Inventario"})}),"\n",(0,s.jsx)(n.p,{children:"En esta secci\xf3n se puede consultar el inventario de productos en el sistema, visualizando informaci\xf3n detallada de cada art\xedculo como el nombre, categor\xeda, stock m\xednimo y actual, precios de venta, costos, entre otros. Tambi\xe9n se puede filtrar la informaci\xf3n y exportarla en formato PDF o Excel."}),"\n",(0,s.jsx)(n.h2,{id:"acceso-al-reporte-de-inventario",children:"Acceso al Reporte de Inventario"}),"\n",(0,s.jsxs)(n.p,{children:["Para acceder a esta secci\xf3n, navega en el men\xfa lateral a ",(0,s.jsx)(n.strong,{children:"Inventario > Reporte Inventario"}),". Ver\xe1s la pantalla principal de consulta del inventario, donde puedes aplicar filtros y ver la informaci\xf3n de los productos registrados en el sistema."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Acceso al Reporte de Inventario",src:o(15836).A+"",width:"4096",height:"2302"})}),"\n",(0,s.jsx)(n.h2,{id:"filtros-de-b\xfasqueda",children:"Filtros de B\xfasqueda"}),"\n",(0,s.jsx)(n.p,{children:"La consulta permite filtrar los resultados por:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Almac\xe9n"}),": Puedes seleccionar el almac\xe9n espec\xedfico o visualizar el inventario de todos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Por stock"}),": Filtra los productos seg\xfan su estado de stock:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Stock < 0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Stock = 0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 < Stock <= Stock m\xednimo"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Stock > Stock m\xednimo"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Tambi\xe9n hay un bot\xf3n ",(0,s.jsx)(n.strong,{children:"Mostrar/Ocultar filtros"})," que despliega opciones adicionales para filtrar por descripci\xf3n, categor\xedas, modelo, marcas, estado y rango de fechas."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Filtros de B\xfasqueda",src:o(24908).A+"",width:"3901",height:"2302"})}),"\n",(0,s.jsx)(n.h2,{id:"listado-de-productos",children:"Listado de Productos"}),"\n",(0,s.jsx)(n.p,{children:"En el listado de productos se muestra la siguiente informaci\xf3n:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"#"}),": N\xfamero secuencial del producto en la lista."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nombre"}),": Nombre del producto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Categor\xeda"}),": Categor\xeda a la que pertenece el producto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stock m\xednimo"}),": Cantidad m\xednima en inventario que se debe mantener."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stock actual"}),": Cantidad actual en inventario."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Precio de venta"}),": Precio al que se vende el producto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costo"}),": Costo del producto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ganancia"}),": Diferencia entre el precio de venta y el costo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ganancia Total"}),": Total de ganancia calculado sobre la cantidad en stock."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Marca"}),": Marca del producto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"F. vencimiento"}),": Fecha de vencimiento del producto, si aplica."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Almac\xe9n"}),": Ubicaci\xf3n en la cual se encuentra almacenado el producto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"C\xf3d. Barras"}),": C\xf3digo de barras del producto para facilitar su identificaci\xf3n."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Listado de Productos",src:o(738).A+"",width:"3901",height:"2302"})}),"\n",(0,s.jsx)(n.h2,{id:"exportar-resultados",children:"Exportar Resultados"}),"\n",(0,s.jsx)(n.p,{children:"Una vez aplicada la b\xfasqueda y los filtros, puedes exportar los resultados en dos formatos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Exportar PDF"}),": Genera un archivo PDF con el listado de productos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Exportar Excel"}),": Genera un archivo Excel con el listado de productos."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Esta funcionalidad permite compartir o analizar el inventario fuera del sistema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Exportar Resultados",src:o(69198).A+"",width:"3901",height:"2302"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," La consulta de inventario permite monitorear y gestionar los productos disponibles, ayudando a la toma de decisiones respecto a compras, ventas y control de inventario."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15836:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/acceso_reporte_inventario-fa501613797f188e1b65620921ec4ce8.jpg"},69198:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/exportar_resultados-3636d9b81f735b3b32ae8a02abea2f00.jpg"},24908:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/filtros_busqueda-6fb196cb12abb056b503bbf8adf6bc6a.jpg"},738:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/listado_productos-14e97c26df9f5823c16736e713ccd266.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var r=o(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);