require 'rails_helper'

RSpec.describe BlogEntry, type: :model do

  before :each do
    @entry = BlogEntry.new title: "A title", entry: "A blog entry", keywords: ["keyword"]
  end

  it { expect(@entry).to be_valid }

  describe :title do
    it "shouldn't be nil" do
      @entry.title = nil
      expect(@entry).to_not be_valid
    end
  end

  describe :entry do
    it "should't be nil" do
      @entry.entry = nil
      expect(@entry).to_not be_valid
    end
  end

  describe :keywords do
    it "can be empty" do
      @entry.keywords = []
      expect(@entry).to be_valid
    end
  end
end
