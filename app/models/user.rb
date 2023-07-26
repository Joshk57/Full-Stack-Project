# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, presence: true
    validates :email, 
        presence: true, 
        uniqueness: true, 
        format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    before_validation :ensure_session_token
    has_secure_password

    has_many :listings,
        foreign_key: :host_id,
        class_name: :Listing,
        dependent: :destroy

    has_one_attached :image
    
    def self.find_by_credentials(email, password)
        # field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
        # user = User.find_by(field => credential)
        user = User.find_by(email: email)
        user&.authenticate(password)
    end

    def reset_session_token!
        self.update!(session_token: generate_unique_session_token)
        self.session_token
    end

    private

    def generate_unique_session_token
        loop do
            token = SecureRandom.base64
            break token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end
