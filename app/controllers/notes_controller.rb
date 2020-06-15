class NotesController < ApplicationController

  def new
    @note = Note.new
    @user = current_user
    @notegroup = Notegroup.find(params[:notegroup_id])
  end

  # def show
  #   @notegroup = Notegroup.find(params[:notegroup_id])
  #   @note = Note.find(params[:note_id])
  # end


  def create
    @notegroup = Notegroup.find(params[:notegroup_id])
    @note = Note.new(note_params)
    @note.notegroup = @notegroup
    @user = current_user
    @note.user = @user
    if @note.save
      redirect_to notegroups_path
    else
      render :new
    end
  end

  def edit
    @notegroup = Notegroup.find(params[:notegroup_id])
    @note = Note.find(params[:id])
  end

  def update
    @notegroup = Notegroup.find(params[:notegroup_id])
    @note = Note.find(params[:id])
    @note.update(note_params)
    redirect_to notegroups_path
  end

  def destroy
      @note = Note.find(params[:id])
      @note.destroy
      redirect_to notegroups_path
  end

private

  def note_params
    params.require(:note).permit(:title, :content, :date)
  end

end
