class Note < ApplicationRecord
  belongs_to :notegroup
  belongs_to :user
  has_one_attached :photo

end
