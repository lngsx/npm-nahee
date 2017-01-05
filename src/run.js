import shell from 'shelljs';
import FilePath from 'filepath';

const repoPath = 'https://github.com/luangch/yolo-npm.git';
const localPath = '/Users/luangch/Repo/super_najee';
const path = FilePath.create(localPath);

const shell_exec_options = {
  silent: true,
};

const run = (dir) => {
  const finalPath = path.append(dir);
  const git_remote_rename_command = '(cd /Users/luangch/Repo/super_najee/nahee && git remote rename origin upstream && git remote -v)';
  const git_clone_command = `git clone ${repoPath} ${finalPath.path}`;
  const npm_i_command = '(cd /Users/luangch/Repo/super_najee/nahee && npm i)';
  console.log('Cloning into local machine...\n');
  shell.exec(git_clone_command, shell_exec_options, (code, stdout, stderr) => {
    console.log('Repository cloned. \nRemove the previous remote address...\n');
    shell.exec(git_remote_rename_command, shell_exec_options, (code, stdout, stderr) => {
      console.log('Installing npm packages...\n');
      shell.exec(npm_i_command, shell_exec_options, (code, stdout, stderr) => {
        console.log('Program output:', stdout);
      });
    });
  });
};
export default run;
