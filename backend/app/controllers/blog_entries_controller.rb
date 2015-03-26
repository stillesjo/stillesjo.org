class BlogEntriesController < ApplicationController
  def index
    respond_with BlogEntry.all
  end

  def show
    respond_with BlogEntry.find(params[:id])
  end

  def update
    # To be implemented
  end

  def destroy
    BlogEntry.find(params[:id]).delete
  end

  def create
    BlogEntry.new(params).save
  end
end
