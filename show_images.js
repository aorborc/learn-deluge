emp_obj  =  Employee  [ID == input.Employee];
//alert emp_obj.Photo;
photo_str = emp_obj.Photo;
photo_str = photo_str.replaceFirst("sharedBy",zoho.adminuser);
photo_str = photo_str.replaceFirst("appLinkName",zoho.appname);
photo_str = photo_str.replaceFirst("viewLinkName","Employee_Report");
photo_str = photo_str.replaceFirst("fieldName",emp_obj.ID + "/Photo");
photo_str = photo_str.replaceFirst("image","image-download");
photo_str = photo_str.replaceFirst("<img","<img width='100' height='100' ");
input.display_photo = photo_str;
/*

<img src="http://creatorexport.zoho.com/sharedBy/appLinkName/viewLinkName/fieldName/image/1508410993410_ruben_bw_510.png" border="0">

<img src="https://creatorexport.zoho.com/aorborctechnologies/learn-deluge/Employee_Report/1853690000026053019/Photo/image-download/1508410993410_ruben_bw_510.png" border="0" class="zc-image-view" elname="zc-ShowPreviewImgEl" style="">

*/
input.display_signature = "<img src='https://creatorexport.zoho.com" + zoho.appuri + "Employee_Report/" + emp_obj.ID + "/Signature/image-download/" + emp_obj.Signature + "' width='100'>";
/*
1508410993632_signature.png

<img src="https://creatorexport.zoho.com/aorborctechnologies/learn-deluge/Employee_Report/1853690000026053019/Signature/image-download/1508410993632_signature.png" width="100">

*/