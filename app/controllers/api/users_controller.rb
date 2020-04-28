require 'json_web_token'

class Api::UsersController < ApplicationController
    def create
        user = User.new(user_params)
        if user.save
            auth_token = JsonWebToken.encode({ user_id: user.id })
            render json: {
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                },
                auth_token: auth_token
            },
             status: :created
        else
            render json: { error: user.errors.full_messages },
                status: :bad_request
        end
    end

    def index
        users = User.all 
        user_hash = Hash.new
        users.each do |user|
            user_hash[user.id] = {
                id: user.id,
                username: user.username,
                email: user.email
            }
        end

        render json: user_hash
    end

    def current
        if current_user
            auth_token = JsonWebToken.encode({ user_id: current_user.id })

            render json: {
                user: {
                        id: current_user.id,
                        username: current_user.username,
                        email: current_user.email
                    },
                auth_token: auth_token
            }
        else
           render json: {
                user: {
                        id: nil,
                        username: nil,
                        email: nil
                    },
                auth_token: nil
            } 
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
