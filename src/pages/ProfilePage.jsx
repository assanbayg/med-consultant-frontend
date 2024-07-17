import GraphPlaceholder from "../components/profile/GraphPlaceholder";
import { ImportFile } from "../components/profile/ImportFile";
import ProfileForm from "../components/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <>
      <ProfileForm />
      <ImportFile />
      <GraphPlaceholder />
    </>
  );
}
