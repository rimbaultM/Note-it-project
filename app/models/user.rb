class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :members, dependent: :destroy
  has_one_attached :photo, dependent: :destroy

  validates :photo, presence: true
  validates_uniqueness_of :name

  attr_writer :login

  def login
    @login || self.name || self.email
  end

end
