import UploadForm from "@/components/common/UploadForm";

export default async function PhotoUpload({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <UploadForm slug={slug}></UploadForm>;
}
