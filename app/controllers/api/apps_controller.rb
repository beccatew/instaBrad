class Api::AppsController < ApplicationController
  before_action :set_app, only: [:show, :update, :destroy]

  def index
    render json: App.all.order(created_at: :desc)
  end

  def show
    render json: @app
  end

  def create
    app = App.create(app_params)
    if app.save
      render json: app
    else
      render json: { errors: app.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @app.update(app_params)
      render json: @app
    else
      render json: { errors: @app.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @app.destroy
  end

  private
    def set_app
      @app = App.find(params[:id])
    end

    def app_params
      params.require(:app).permit(:name, :image, :description)
    end
end
