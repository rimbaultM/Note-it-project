class Notegroup < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy
  has_many :members, dependent: :destroy
end
