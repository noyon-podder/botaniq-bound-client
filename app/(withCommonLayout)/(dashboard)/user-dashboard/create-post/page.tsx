import CreateNewPostForm from "@/components/module/Profiile/post/CreateNewPostForm";

const CreatePostPage = () => {
  return (
    <div className="">
      <div className="py-10 px-10">
        <h2 className="text-4xl font-bold text-foreground text-center ">
          Create New Post
        </h2>
        <CreateNewPostForm />
      </div>
    </div>
  );
};

export default CreatePostPage;
