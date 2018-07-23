class Api::V1::ProductsController < Api::BaseController
  def load_new_products
    new_product = Product.order_by_created_at.page(params[:page])
      .per Settings.record_per_page
    render json: new_product
  end
end
