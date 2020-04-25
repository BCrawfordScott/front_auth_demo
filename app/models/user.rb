class User < ApplicationRecord
    has_secure_password
    
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true

    def self.find_by_credentials(credentials)
        User.find_by(username: credentials[:username]) || User.find_by(email: credentials[:email])   
    end
end
