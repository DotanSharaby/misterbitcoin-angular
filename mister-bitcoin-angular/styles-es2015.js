(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  text-align: center;\n  color: #0A090C;\n  background-color: #F0EDEE;\n  margin: 0;\n  font-family: cursive;\n}\ninput {\n  border: none;\n  background-color: transparent;\n  border-bottom: 1px solid black;\n  margin: 20px 0;\n  padding: 5px;\n}\ninput:focus {\n  outline: none;\n}\n.my-icons-container {\n  display: flex;\n  justify-content: space-between;\n}\n.my-icons {\n  font-size: 2em;\n  cursor: pointer;\n  outline: none;\n}\n.clean-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\napp-contact-page .fa {\n  font-size: 40px;\n  color: #26b6b6;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  border: 3px solid #26b6b6;\n  border-radius: 50px;\n  width: 46px;\n  cursor: pointer;\n}\napp-contact-page .fa:hover {\n  transition: all 0.3;\n  background-color: #ffffffc7;\n}\napp-header header {\n  padding: 0 25px;\n  background-color: #fff;\n  border-bottom: 1px solid #cbd0d0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 75px;\n  transition: all 0.2s ease-in-out;\n}\napp-header header h2 {\n  padding-top: 20px;\n}\napp-header header .navbar-nav {\n  flex-direction: row;\n  position: absolute;\n  right: 30px;\n  top: 20px;\n}\napp-header header .navbar-nav .nav-item {\n  font-size: 35px;\n  color: #26b6b6;\n  margin-right: 20px;\n}\napp-header header .navbar-nav .nav-item:hover {\n  color: #13dbdb;\n}\napp-header header .menu-btn {\n  border: none;\n  cursor: pointer;\n  display: none;\n  background-color: transparent;\n  font-size: 36px;\n  color: #26b6b6;\n  padding-top: 10px;\n  outline: none;\n}\napp-header header .screen {\n  position: fixed;\n  top: 75px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000061;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n@media (max-width: 660px) {\n  app-header header .menu-btn {\n    display: block;\n    position: absolute;\n    left: 20px;\n    top: 0px;\n  }\n  app-header header .navbar-nav {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    position: fixed;\n    text-align: center;\n    top: 75px;\n    right: 0;\n    background: #f1f1f1eb;\n    border-left: 2px solid rgba(223, 218, 218, 0.6);\n    transform: translate(100%, 0);\n    transition: transform 0.6s;\n  }\n  app-header header .navbar-nav a {\n    height: 5rem;\n    width: 8rem;\n    font-size: 18px;\n    border-bottom: 1px solid #c8c8c8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n  }\n  app-header header.opened-menu nav {\n    transform: translate(0, 0);\n  }\n  app-header header.opened-menu .screen {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXERvdGFuXFxEZXNrdG9wXFxtaXN0ZXItYml0Y29pbi1hbmd1bGFyL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxEb3RhblxcRGVza3RvcFxcbWlzdGVyLWJpdGNvaW4tYW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcRG90YW5cXERlc2t0b3BcXG1pc3Rlci1iaXRjb2luLWFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0LXBhZ2VcXGNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9DOlxcVXNlcnNcXERvdGFuXFxEZXNrdG9wXFxtaXN0ZXItYml0Y29pbi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUk7RUFDSSxhQUFBO0FDRVI7QURFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKO0FDakNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURvQ1I7QUNsQ1E7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FEb0NaO0FFbERJO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUZxRFI7QUVuRFE7RUFDSSxpQkFBQTtBRnFEWjtBRWxEUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRm9EWjtBRWxEWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUZvRGhCO0FFbkRnQjtFQUNJLGNBQUE7QUZxRHBCO0FFaERRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBRmtEWjtBRS9DUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBRmlEWjtBRTlDUTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7RUZnRGQ7RUU3Q1U7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxxQkFBQTtJQUNBLCtDQUFBO0lBQ0EsNkJBQUE7SUFDQSwwQkFBQTtFRitDZDtFRTdDYztJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdDQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VGK0NsQjtFRXpDYztJQUNJLDBCQUFBO0VGMkNsQjtFRXhDYztJQUNJLG1CQUFBO0lBQ0EsVUFBQTtFRjBDbEI7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgJy4vYXBwL2FwcC5jb21wb25lbnQuc2Nzcyc7XG4vLyBQQUdFU1xuQGltcG9ydCAnLi9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2Nzcyc7XG5cbi8vIENNUFNcbkBpbXBvcnQgJy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuQGltcG9ydCAnLi9hcHAvY29tcG9uZW50cy9jb250YWN0LWZpbHRlci9jb250YWN0LWZpbHRlci5jb21wb25lbnQuc2Nzcyc7XG4iLCJib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMEEwOTBDO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRURFRTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5teS1pY29ucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm15LWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNsZWFuLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMEEwOTBDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFREVFO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm15LWljb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm15LWljb25zIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNsZWFuLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYXBwLWNvbnRhY3QtcGFnZSAuZmEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMjZiNmI2O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyNmI2YjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiA0NnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hcHAtY29udGFjdC1wYWdlIC5mYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNztcbn1cblxuYXBwLWhlYWRlciBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JkMGQwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuYXBwLWhlYWRlciBoZWFkZXIgaDIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmFwcC1oZWFkZXIgaGVhZGVyIC5uYXZiYXItbmF2IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAyMHB4O1xufVxuYXBwLWhlYWRlciBoZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzI2YjZiNjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuYXBwLWhlYWRlciBoZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICMxM2RiZGI7XG59XG5hcHAtaGVhZGVyIGhlYWRlciAubWVudS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMyNmI2YjY7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuYXBwLWhlYWRlciBoZWFkZXIgLnNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3NXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gIGFwcC1oZWFkZXIgaGVhZGVyIC5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgYXBwLWhlYWRlciBoZWFkZXIgLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiA3NXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjFlYjtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMjIzLCAyMTgsIDIxOCwgMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgfVxuICBhcHAtaGVhZGVyIGhlYWRlciAubmF2YmFyLW5hdiBhIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgYXBwLWhlYWRlciBoZWFkZXIub3BlbmVkLW1lbnUgbmF2IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICBhcHAtaGVhZGVyIGhlYWRlci5vcGVuZWQtbWVudSAuc2NyZWVuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJhcHAtY29udGFjdC1wYWdlIHtcclxuXHJcbiAgICAuZmEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDM4LCAxODIsIDE4Mik7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMzgsIDE4MiwgMTgyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJhcHAtaGVhZGVyIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmQwZDA7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigzOCwgMTgyLCAxODIpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigxOSwgMjE5LCAyMTkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudS1idG4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigzOCwgMTgyLCAxODIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY3JlZW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogNzVweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDYxO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgICAgICAubWVudS1idG4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRvcDogNzVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMWViO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDIyMywgMjE4LCAyMTgsIDAuNik7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYub3BlbmVkLW1lbnUge1xyXG4gICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2NyZWVuIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dotan\Desktop\mister-bitcoin-angular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);