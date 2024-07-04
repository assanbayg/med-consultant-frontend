import ProfileForm from "../components/profile/ProfileForm";
import { ImportFile } from "../components/ImportFile";
import GraphPlaceholder from "../components/GraphPlaceholder";

export default function ProfilePage() {
  return (
    <>
      <ProfileForm />
      <ImportFile />
      <GraphPlaceholder />
    </>
  );
}
