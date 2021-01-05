# frozen_string_literal: true

class TodosController < ApplicationController
  before_action :set_todo, only: %i[update delete]

  def index
    # todo
  end

  def all_todos
    @completed = Todo.completed
    @pending = Todo.uncompleted.order(id: :asc)
  end

  def add
    if Todo.create(todo_params)
      render json: { message: "Todo Item adding successfully" }
    else
      render json: { message: "An error occured" }
    end
  end

  def update
    if @todo.update(todo_params)
      render json: { message: "Todo Item updated successfully" }
    else
      render json: { message: "An error occured" }
    end
  end

  def delete
    if @todo.destroy
      render json: { message: "Todo Item delete successfully" }
    else
      render json: { message: "An error occured" }
    end
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:id, :title, :complete, :remark)
  end
end

