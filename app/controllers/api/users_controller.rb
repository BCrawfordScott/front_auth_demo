class Api::UsersController < ApplicationController
    def create
        user = User.new(user_params)
        if user.save
            auth_token = JsonWebToken.encode({ user_id: user.id })
            render json: { 
                message: "User successfully Created!",
                auth_token: auth_token
             },
             status: :created
        else
            render json: { error: user.errors.full_messages },
                status: :bad_request
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
