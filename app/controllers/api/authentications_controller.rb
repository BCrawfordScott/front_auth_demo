require 'json_web_token'

class Api::AuthenticationsController < ApplicationController
    def create
        user = User.find_by_credentials(
            username: params[:user][:username],
            email: params[:user][:email]
        )

        if user && user.authenticate(params[:user][:password])
            auth_token = JsonWebToken.encode({ user_id: user.id })
            render json: {
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                },
                auth_token: auth_token
            },
            status: :ok
        else
            render json: { errors: "Invalid Credentials" }, status: :bad_request
        end
    end
end
