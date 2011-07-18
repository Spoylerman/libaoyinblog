window.onload = function()
{
var editor = CKEDITOR.replace( 'content',
{
    filebrowserBrowseUrl : '/ckeditor/browse/',
    filebrowserImageBrowseUrl : '/ckeditor/browse/',
    filebrowserUploadUrl : '/ckeditor/upload/',
    filebrowserImageUploadUrl : '/ckeditor/upload/',
    width:'100%',
    heigth:'100%',
    contentsCss:'/media/style/bearth/global.css',
} );

}
