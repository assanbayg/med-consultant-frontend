import ProfileForm from "../components/profile/ProfileForm";
import { ImportFile } from "../components/profile/ImportFile";
import GraphPlaceholder from "../components/profile/GraphPlaceholder";

export default function ProfilePage() {
  return (
    <>
      <ProfileForm />
      <ImportFile />
      <GraphPlaceholder />
    </>
  );
}
