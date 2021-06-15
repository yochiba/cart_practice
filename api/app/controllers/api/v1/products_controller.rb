# frozen_string_literal: true

module Api::V1
  class ProductsController < BaseApiController
    def index
      Rails.logger.info "[INFO]:: Products controller"
      # @response = Product.where.not(display_flag: false)
      # status = @response.present? ? 200 : 404
      # Rails.logger.info "[INFO]:: #{status}"
      # Rails.logger.info "[INFO]:: #{@response}"
      # render json: @response, serializer: ProductSerializer
    end
  end
end
