class BlogEntry < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :entry
  serialize :keywords,Array
end
