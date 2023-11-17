'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9694158a0bb4f83ae6db658a9b79973d",
"index.html": "c19b1959adbe278b4346cb1bc0d47aae",
"/": "c19b1959adbe278b4346cb1bc0d47aae",
"main.dart.js": "3640adb0d67129a2fd050654d4ee25af",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f274561ace37b2ad0d5aa1d473b6dab",
"assets/res/images/schedule_recommand_arrow_close.png": "5f0232497ae023371c37c6b27d75ef74",
"assets/res/images/ic_create_newline_dark.png": "4b99ba38cd0ceec9c3157002be6ce760",
"assets/res/images/contact_list_enter_icon.png": "1dd1023c1525ad98f9e7802a4a7d83af",
"assets/res/images/ic_create_newline.png": "071f19e85b45febcb124f00400b3d037",
"assets/res/images/schedule_success_icon.png": "3337c25be05169ca97114f68eaa3d9d5",
"assets/res/images/schedule_list_row_delete_icon.png": "2a7c395ed63811ff2bfb3e02e063cf20",
"assets/res/images/ic_remark_delete.png": "e6fa5f3bcec0e15a0c6e9c8625514fe4",
"assets/res/images/schedule_date_to_left.png": "8a85ea430b190bc6fc05e20cfebae87d",
"assets/res/images/schedule_list_row_edit_icon.png": "5d9b9660292c7c953bd0e2eb928da58a",
"assets/res/images/drawer_head_bg.png": "081a8ed32c06afdebecba811a95f0613",
"assets/res/images/note_create_bulletList.png": "94a070fc72880aebe27294f99926a437",
"assets/res/images/schedule_recommand_arrow_open.png": "bdb0edf8e7a7b1fca01c967b59ff4db7",
"assets/res/images/ic_create_choose_time.png": "e0f66a8b4dd810c8f81187db3de216be",
"assets/res/images/schedule_enter_icon.png": "220939436046fee6c834cf4ef7dfa42f",
"assets/res/images/ic_create_selected.png": "4ea4533a02f276b5ba3f8b1af1bc3c04",
"assets/res/images/schedule_repeat_icon.png": "b12795b250b9e224bd658f79ce37d1e8",
"assets/res/images/schedule_unsuccess_icon.png": "a1a0c26291de963f67b22954ca7b3fa1",
"assets/res/images/ic_create_choose_contacts.png": "aa6ce55716450944de503af58ff5076b",
"assets/res/images/schedule_finished_icon.png": "96f7669b75ca130704a4fc0fe76b58fb",
"assets/res/images/note_list_user_icon.png": "761c74cb58072a850dfb48efd2710141",
"assets/res/images/robot_input_status_mic.png": "3b20bb2b94e0c8e143be4e9ae9ba59d5",
"assets/res/images/ic_remark_edit.png": "0d8ab3eee46875a1a2fd0ec6f8056a28",
"assets/res/images/calendar_bottom_shadow.png": "901cf31e56e5e5be71074ae173cd52e5",
"assets/res/images/ic_create_choose_tag.png": "5408c89b7f59a857e0e971267a3d7e19",
"assets/res/images/ic_remark_down_arrow.png": "1249c3eb1568d61d75fdba0ef06b01c1",
"assets/res/images/robot_input_status_keyboard.png": "b1ebd4af183f4f8d8eca211ac6ead80e",
"assets/res/images/ic_note_transform_schedule.png": "d1cacdc5ce66228660bb6af821817a70",
"assets/res/images/ic_schedule_note_create_button.png": "7254f8e650f420d3abc9517772b4c311",
"assets/res/images/ic_note_transformed_schedule.png": "c7b5a4b648f37797aa687eb73aec72fa",
"assets/res/images/schedule_unfinished_icon.png": "f91cb34f57ad8789b467b6adaa308b66",
"assets/res/images/ic_note_remark_add.png": "b8f865ad0aa6db0715158c5c6185e935",
"assets/res/images/note_tag_search.png": "7d92ec8fc6e34f3e343be65c8791146a",
"assets/res/images/contact_list_back_icon.png": "cd8d0b342545830859353ec14363d27e",
"assets/res/images/drawer_sidebar_list.png": "d9579e404057078cecf6fd0828248752",
"assets/res/images/ic_placeholder_bg.png": "e0f7e23bc960220e16ead5e4c7b1b1d0",
"assets/res/images/ic_create_choose_level.png": "28dcf1b74d11cc8029f4ce7fcbfe7e32",
"assets/res/images/contact_flag_icon.png": "a137cad0e1fef8fb2f36187b29d2cd7c",
"assets/res/images/ic_add_day.png": "59fbdd11024b8e93a5eca823ad42eff1",
"assets/res/images/ic_search.png": "6a9cee8f552abd2f867391a72f81f1a9",
"assets/res/images/calendar_topright_img.png": "d9919b3d3a24a589306b78965bcfcd75",
"assets/res/images/note_create_numberList.png": "f894d9985b4473134f5f679ca60dbccf",
"assets/res/images/ic_note_unarchive.png": "45dbb87c2ef0e12c52e00421b75d7d21",
"assets/res/images/robot_page_close.png": "a780b74f4c7bd48cf0e17aa08c274316",
"assets/res/images/robot_logo_btn.png": "05c15772b9a02df71e0022bd23bc11be",
"assets/res/images/robot_setting_icon.png": "4829f3226b17cc2174c618fa1406a47d",
"assets/res/images/contact_list_empty.png": "cdf8896dfaa38bbc6a3e2c6aa7e544ba",
"assets/res/images/ic_search_item_delete.png": "0c75e77b93e61015e747c1ad21765cec",
"assets/res/images/calendar_fold.png": "e060d9e2c55f461c5e988d28520bf7ee",
"assets/res/images/ic_titlebar_back.png": "204126c15edb465aec4d464576f54efc",
"assets/res/images/contact_add_btn.png": "071a8c5b25ece9a412b4431963faea2a",
"assets/res/images/robot_enter_btn.png": "9b7bb92c7744e1737ff86b05547b4e9b",
"assets/res/images/ic_note_delete.png": "94258f18abbde14c939e7e1fba04f080",
"assets/res/images/robot_schdule_background_icon.png": "74621ea29da9e2947086a7756607ff17",
"assets/res/images/ic_minus_day.png": "238a2affa2c9e2b70106ae44e51ac521",
"assets/res/images/ic_note_archived.png": "25d748390355eca7adc15d8ac79fe0f7",
"assets/res/images/schedule_date_to_right.png": "1dd1023c1525ad98f9e7802a4a7d83af",
"assets/res/images/schedule_list_row_detail_back.png": "f7594f3a05b797c431fb20378af32cef",
"assets/res/images/robot_setting_page_icon.png": "a4c5e28f3e1faff5eb150b2c11dc2349",
"assets/res/images/note_page_recommand_icon.png": "cea9e637cc9c668080316fc3c67e5893",
"assets/res/images/robot_enter_textfield_border_icon.png": "de87c0164f9c71a2bd46790deb1640b6",
"assets/res/images/ic_selected.png": "68b62ddcbc7cbb945e8f10626a6e2dd9",
"assets/res/images/ic_unselected.png": "39aaa85513a67559e04645dd841ccb3b",
"assets/res/a.txt": "19d20456989c68e9ec4ea7aecf50fb01",
"assets/AssetManifest.json": "5b703ca527ae3ff7b2267d415b4fbff4",
"assets/NOTICES": "4198b2946683d03f9714eedcadd1eb93",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
