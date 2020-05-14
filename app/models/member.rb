class Member < ApplicationRecord
  belongs_to :notegroup
  belongs_to :user
end
