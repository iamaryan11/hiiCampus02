import mongoose from "mongoose";
async function master() {
    await mongoose.connect('mongodb+srv://ctf_csaV2:11letsdoctf%4029%23@ctfv2.zk7tc5q.mongodb.net/hiiCampus');
}
export default master;
//# sourceMappingURL=db.js.map