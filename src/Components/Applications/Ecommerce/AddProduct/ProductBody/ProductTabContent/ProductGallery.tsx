import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";

const ProductGallery = () => {
  return (
    <div className="product-upload">
      <p>Product Gallery<span className="txt-danger"> *</span></p>
      <CommonFileUpload/>
    </div>
  );
};

export default ProductGallery;
